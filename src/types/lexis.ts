/**
 * Antigravity Lexis AI Assistant Subsystem Types
 * Strictly implements Master Specification Section 76
 */

export type KnowledgeCategory = 
  | 'profile'
  | 'project'
  | 'case-study'
  | 'skill'
  | 'education'
  | 'experience'
  | 'contact'
  | 'philosophy';

export interface KnowledgeChunk {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly category: KnowledgeCategory;
  readonly source: string;
  readonly sourceUrl: string;
  readonly projectId?: string;
  readonly visibility: 'PUBLIC';
  readonly lastUpdated: string;
  readonly priority: number;
  readonly keywords: readonly string[];
}

export interface RetrievalResult {
  readonly chunk: KnowledgeChunk;
  readonly score: number;
}

export interface LexisSourceReference {
  readonly title: string;
  readonly url: string;
}

export interface LexisMessage {
  readonly id: string;
  readonly role: 'user' | 'assistant' | 'system';
  readonly content: string;
  readonly timestamp: number;
  readonly sources?: readonly LexisSourceReference[];
  readonly isFallback?: boolean;
}

export interface LexisChatRequest {
  readonly message: string;
  readonly conversationHistory?: readonly { role: 'user' | 'assistant'; content: string }[];
}

export interface LexisChatResponse {
  readonly reply: string;
  readonly sources: readonly LexisSourceReference[];
  readonly isFallback: boolean;
  readonly latencyMs?: number;
}

export interface AIProvider {
  generateResponse(
    userMessage: string,
    retrievedContext: readonly KnowledgeChunk[],
    conversationHistory: readonly { role: 'user' | 'assistant'; content: string }[]
  ): Promise<{ reply: string; sources: readonly LexisSourceReference[]; isFallback: boolean }>;
}
