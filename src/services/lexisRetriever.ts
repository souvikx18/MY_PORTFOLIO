import { KnowledgeChunk, RetrievalResult, LexisSourceReference } from '../types/lexis';
import { lexisKnowledgeBase } from '../data/lexisKnowledge';

/**
 * Lexis Knowledge Retrieval & Security Screening Service
 * Strictly implements Master Specification Sections 76.8, 76.9, 76.10, 76.11, 76.21
 */

// Prompt injection heuristic patterns (Section 76.21)
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+|previous\s+|your\s+)*instructions/i,
  /reveal\s+(system\s+|your\s+)*prompt/i,
  /what\s+are\s+your\s+(system\s+|hidden\s+)*instructions/i,
  /system\s+prompt/i,
  /bypass\s+(safety|rules|filters)/i,
  /developer\s+mode/i,
  /jailbreak/i,
  /dan\s+mode/i,
  /api\s+key/i,
  /secret\s+key/i,
  /drop\s+table/i,
  /<script>/i
];

// Stopwords to filter out of retrieval query (including generic verbs)
const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to', 'for', 'of',
  'with', 'and', 'or', 'do', 'does', 'did', 'can', 'could', 'what', 'where', 'how',
  'who', 'tell', 'me', 'about', 'his', 'he', 'has', 'have', 'souvik', 'souvik\'s',
  'work', 'worked', 'working', 'app', 'system', 'thing', 'know', 'find', 'show', 'give'
]);

export function screenForPromptInjection(query: string): boolean {
  return INJECTION_PATTERNS.some(pattern => pattern.test(query));
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 1 && !STOPWORDS.has(token));
}

export function retrieveRelevantChunks(
  userQuery: string,
  minConfidenceThreshold = 3.5,
  maxChunks = 2
): {
  chunks: readonly KnowledgeChunk[];
  topScore: number;
  isConfident: boolean;
  sources: readonly LexisSourceReference[];
} {
  const queryTokens = tokenize(userQuery);

  if (queryTokens.length === 0) {
    return {
      chunks: [],
      topScore: 0,
      isConfident: false,
      sources: []
    };
  }

  const scoredResults: RetrievalResult[] = lexisKnowledgeBase.map(chunk => {
    let score = 0;
    let hasDirectKeywordOrTitleHit = false;
    const chunkTitleTokens = tokenize(chunk.title);
    const chunkContentTokens = tokenize(chunk.content);
    const chunkKeywords = chunk.keywords.map(k => k.toLowerCase());

    for (const token of queryTokens) {
      // Direct keyword hit (high weight)
      if (chunkKeywords.includes(token)) {
        score += 6.0;
        hasDirectKeywordOrTitleHit = true;
      }

      // Keyword phrase partial match
      if (chunkKeywords.some(k => k.includes(token) || token.includes(k))) {
        score += 3.5;
        hasDirectKeywordOrTitleHit = true;
      }

      // Title match (high weight)
      if (chunkTitleTokens.includes(token)) {
        score += 5.0;
        hasDirectKeywordOrTitleHit = true;
      }

      // Content match
      if (chunkContentTokens.includes(token)) {
        score += 1.5;
      }
    }

    // Require at least one direct keyword or title hit to avoid spurious content-only collisions
    if (!hasDirectKeywordOrTitleHit) {
      score = 0;
    } else {
      score += (chunk.priority * 0.1);
    }

    return { chunk, score };
  });

  // Sort descending by score
  scoredResults.sort((a, b) => b.score - a.score);

  const topResult = scoredResults[0];
  const topScore = topResult ? topResult.score : 0;
  const isConfident = topScore >= minConfidenceThreshold && (topResult ? topResult.score > 0 : false);

  const qualifyingResults = scoredResults
    .filter(r => r.score >= minConfidenceThreshold)
    .slice(0, maxChunks);

  const chunks = qualifyingResults.map(r => r.chunk);

  // Extract deduplicated source references (Section 76.11)
  const sourcesMap = new Map<string, LexisSourceReference>();
  chunks.forEach(c => {
    if (!sourcesMap.has(c.source)) {
      sourcesMap.set(c.source, {
        title: c.source,
        url: c.sourceUrl
      });
    }
  });

  return {
    chunks,
    topScore,
    isConfident,
    sources: Array.from(sourcesMap.values())
  };
}
