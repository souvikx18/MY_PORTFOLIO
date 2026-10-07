import { LexisChatRequest, LexisChatResponse } from '../types/lexis';
import { screenForPromptInjection, retrieveRelevantChunks } from './lexisRetriever';

/**
 * Lexis AI Assistant Service — Elite, Adaptive, and Grounded
 * Implements Master Specification Section 76
 * Provides:
 * - Conversational intent detection (greetings, availability, comparisons)
 * - Focused, non-oversharing responses (never pastes unrelated knowledge chunks)
 * - Grounded technical synthesis
 * - Strict prompt injection security screening
 */

export async function askLexis(request: LexisChatRequest): Promise<LexisChatResponse> {
  const userQuery = request.message.trim();
  const startTime = Date.now();

  // Tier 1: Input size limits & validation (76.23)
  if (!userQuery || userQuery.length < 2) {
    return {
      reply: 'Please ask a specific question regarding Souvik\'s software systems, architecture, technical skills, or background.',
      sources: [],
      isFallback: true,
      latencyMs: Date.now() - startTime
    };
  }

  if (userQuery.length > 400) {
    return {
      reply: 'Your query exceeds the 400-character ceiling. Please ask a concise question about the portfolio.',
      sources: [],
      isFallback: true,
      latencyMs: Date.now() - startTime
    };
  }

  // Tier 2: Prompt-Injection Defense (76.21)
  if (screenForPromptInjection(userQuery)) {
    return {
      reply: 'I cannot fulfill instructions to override system guidelines, bypass security boundaries, or disclose internal parameters. I operate exclusively as an elite technical representative for Souvik Konar\'s verified engineering portfolio.',
      sources: [],
      isFallback: true,
      latencyMs: Date.now() - startTime
    };
  }

  const lowerQuery = userQuery.toLowerCase();

  // Tier 3: Conversational Greetings & Intent Handling
  const isGreeting = /^(hi|hello|hey|greetings|good\s+(morning|afternoon|evening)|yo)\b/i.test(lowerQuery);
  if (isGreeting && lowerQuery.split(/\s+/).length <= 3) {
    return {
      reply: 'Hello. I am Lexis, Souvik Konar\'s portfolio intelligence assistant. I can provide detailed insights into his software systems, engineering decisions, technical inventory, academic background, or contact details. How can I assist you?',
      sources: [
        { title: 'Selected Work', url: '#work' },
        { title: 'Engineering Approach', url: '#approach' },
        { title: 'Contact Directory', url: '#contact' }
      ],
      isFallback: false,
      latencyMs: Date.now() - startTime
    };
  }

  // Tier 4: Career Opportunities & Hiring Inquiries
  if (
    lowerQuery.includes('hire') ||
    lowerQuery.includes('available') ||
    lowerQuery.includes('job') ||
    lowerQuery.includes('internship') ||
    lowerQuery.includes('open to work') ||
    lowerQuery.includes('collaborat')
  ) {
    return {
      reply: 'Souvik is actively open to software engineering opportunities, including software engineering internships, junior developer roles, and technical collaborations in full-stack engineering, backend systems, and AI workflows. He brings strong foundations in Data Structures & Algorithms, secure object-oriented programming (NASSCOM-certified), and modern web architectures.',
      sources: [
        { title: 'Contact Directory', url: '#contact' },
        { title: 'About Section', url: '#about' }
      ],
      isFallback: false,
      latencyMs: Date.now() - startTime
    };
  }

  // Tier 5: Direct Contact Question Handling (Avoid oversharing skills!)
  if (
    lowerQuery.includes('contact') ||
    lowerQuery.includes('email') ||
    lowerQuery.includes('phone') ||
    lowerQuery.includes('reach') ||
    lowerQuery.includes('linkedin') ||
    lowerQuery.includes('telegram')
  ) {
    return {
      reply: 'You can reach Souvik Konar through the following verified channels:\n• Email: skonar566@gmail.com\n• Phone: +91 9907488093\n• LinkedIn: linkedin.com/in/souvik-konarx18\n• GitHub: github.com/souvikx18\n• Telegram: @asyncX18 (t.me/asyncX18)',
      sources: [{ title: 'Contact Directory', url: '#contact' }],
      isFallback: false,
      latencyMs: Date.now() - startTime
    };
  }

  // Tier 6: Check for Alvera specifically (Rule: Alvera completely removed)
  if (lowerQuery.includes('alvera')) {
    return {
      reply: 'Alvera is not part of Souvik\'s verified portfolio. His current project registry consists of DecisionOS (hosted), MATEX (hosted), Veridyn (in development), Flash Flood Prediction System, HireIQ, and JARVIS.',
      sources: [{ title: 'Selected Work', url: '#work' }],
      isFallback: false,
      latencyMs: Date.now() - startTime
    };
  }

  // Tier 7: Hosted Projects Query
  if (
    lowerQuery.includes('hosted') ||
    lowerQuery.includes('live') ||
    lowerQuery.includes('deployed')
  ) {
    return {
      reply: 'Souvik currently has two production-hosted applications live:\n1. DecisionOS — Data-Driven Decision Support Platform: Hosted on Vercel at https://decision-os-tan.vercel.app/\n2. MATEX — Interactive Chess Engine Web Application: Hosted on Netlify at https://matex-engine.netlify.app/\n\nHis other projects (Veridyn, JARVIS, Flash Flood Prediction System, and HireIQ) are either in active development or awaiting hosting, with repositories available on GitHub.',
      sources: [
        { title: 'DecisionOS (Vercel)', url: 'https://decision-os-tan.vercel.app/' },
        { title: 'MATEX (Netlify)', url: 'https://matex-engine.netlify.app/' },
        { title: 'Selected Work', url: '#work' }
      ],
      isFallback: false,
      latencyMs: Date.now() - startTime
    };
  }

  // Tier 8: All Projects List (only when not inquiring about a specific named project)
  const mentionsSpecificProject = 
    lowerQuery.includes('veridyn') ||
    lowerQuery.includes('matex') ||
    lowerQuery.includes('decision') ||
    lowerQuery.includes('jarvis') ||
    lowerQuery.includes('hireiq') ||
    lowerQuery.includes('flood');

  if (
    !mentionsSpecificProject &&
    (lowerQuery.includes('project') || lowerQuery.includes('built') || lowerQuery.includes('work')) &&
    (lowerQuery.includes('all') || lowerQuery.includes('what') || lowerQuery.includes('list') || lowerQuery.includes('tell me'))
  ) {
    return {
      reply: 'Souvik\'s engineering portfolio includes 6 verified systems:\n• DecisionOS: Data-driven decision support with structured digital workflows (Hosted on Vercel)\n• MATEX: Interactive browser-based chess platform with turn validation (Hosted on Netlify)\n• Veridyn: AI agent production-readiness evaluation harness (In Development)\n• Flash Flood Prediction System: Environmental and hydrological early-warning platform (Not Yet Deployed)\n• HireIQ: Dual-panel resume evaluation platform for recruiters and students (Not Yet Deployed)\n• JARVIS: Localized Python voice assistant and task automation system (In Development)',
      sources: [{ title: 'Selected Work', url: '#work' }],
      isFallback: false,
      latencyMs: Date.now() - startTime
    };
  }

  // Tier 9: General Out-of-Domain Screening
  if (
    lowerQuery.includes('weather in') ||
    lowerQuery.includes('write a poem') ||
    lowerQuery.includes('capital of') ||
    lowerQuery.includes('recipe for') ||
    lowerQuery.includes('stock price')
  ) {
    return {
      reply: 'I am Lexis, Souvik\'s portfolio assistant. I specialize in answering questions about his software systems, engineering decisions, technical inventory, academic background, and contact details.',
      sources: [
        { title: 'Selected Work', url: '#work' },
        { title: 'Engineering Approach', url: '#approach' },
        { title: 'Contact Directory', url: '#contact' }
      ],
      isFallback: true,
      latencyMs: Date.now() - startTime
    };
  }

  // Tier 10: Knowledge Base Retrieval
  const { chunks, isConfident, sources } = retrieveRelevantChunks(userQuery);

  if (!isConfident || chunks.length === 0) {
    return {
      reply: 'I don\'t have verified records regarding that specific inquiry in Souvik\'s portfolio knowledge base. For further technical details or inquiries not covered here, feel free to inspect his GitHub repositories or contact him directly via email or LinkedIn.',
      sources: [
        { title: 'GitHub Profile', url: 'https://github.com/souvikx18' },
        { title: 'Contact Directory', url: '#contact' }
      ],
      isFallback: true,
      latencyMs: Date.now() - startTime
    };
  }

  // Only take the primary, most relevant chunk — NEVER paste unrelated chunks (Section 76.34: Never Overshare!)
  const primaryChunk = chunks[0];
  if (!primaryChunk) {
    return {
      reply: 'I don\'t have verified records about that in Souvik\'s portfolio.',
      sources: [{ title: 'Contact Directory', url: '#contact' }],
      isFallback: true,
      latencyMs: Date.now() - startTime
    };
  }

  return {
    reply: primaryChunk.content,
    sources,
    isFallback: false,
    latencyMs: Date.now() - startTime
  };
}
