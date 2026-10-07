import { Project } from '../types/portfolio';

/**
 * Verified project portfolio for Souvik Konar.
 * Operating Directive #07: Sourced directly from verified user records.
 * Rules applied:
 * - Alvera completely removed.
 * - Exact project statuses: 'HOSTED' | 'IN DEVELOPMENT' | 'NOT YET DEPLOYED'.
 * - Zero fabricated metrics, users, or deployment claims.
 * - Projects without deployment show available repository and status; no fake live demo.
 */
export const projectsData: readonly Project[] = [
  {
    id: 'decisionos',
    name: 'DecisionOS',
    tagline: 'Data-driven decision-support platform with structured evaluation workflows',
    description: 
      'A data-driven decision-support platform designed to help users analyze relevant information, evaluate complex trade-offs, and make structured decisions through an intuitive digital workflow.',
    status: 'HOSTED',
    category: 'Full-Stack Workflow',
    featured: true,
    githubUrl: 'https://github.com/souvikx18/DecisionOS.git',
    liveUrl: 'https://decision-os-tan.vercel.app/',
    tags: ['React', 'TypeScript', 'Decision Systems', 'Hosted', 'Vercel'],
    role: 'Full-Stack Developer',
    architectureOverview: 
      'Client-side evaluation engine orchestrating dynamic criteria weights, multi-factor trade-off modeling, and persistent workflow state.',
    engineeringFocus: [
      'Deterministic decision-matrix computation',
      'Persistent client-side workflow state',
      'Zero-layout-shift responsive interface',
      'Production deployment on Vercel'
    ]
  },
  {
    id: 'matex',
    name: 'MATEX',
    tagline: 'Browser-based chess platform with board state validation and move tracking',
    description: 
      'A responsive, browser-based chess web application featuring real-time board state management, turn-by-turn legal move validation, and interactive piece interactions.',
    status: 'HOSTED',
    category: 'Interactive Engine',
    featured: true,
    githubUrl: 'https://github.com/souvikx18/Chess-Website--using-REACT.git',
    liveUrl: 'https://matex-engine.netlify.app/',
    tags: ['React', 'JavaScript', 'Chess Logic', 'Hosted', 'Netlify'],
    role: 'Frontend & Engine Developer',
    architectureOverview: 
      'State-driven chess board representation enforcing turn alternation, position validation, and visual board transitions with zero animation jank.',
    engineeringFocus: [
      'Turn validation and legal move verification logic',
      'Lightweight component state architecture without external game engines',
      'High-contrast board rendering and keyboard-accessible UI',
      'Production deployment on Netlify'
    ]
  },
  {
    id: 'veridyn',
    name: 'Veridyn',
    tagline: 'Production-readiness evaluation harness for AI agents and RAG pipelines',
    description: 
      'An automated evaluation harness engineered to test and benchmark AI agents under realistic edge cases, evaluating retrieval grounding, reasoning fidelity, and tool-invocation stability.',
    status: 'IN DEVELOPMENT',
    category: 'AI & Systems',
    featured: true,
    githubUrl: 'https://github.com/souvikx18/RAG-Agent-Eval-Harness.git',
    tags: ['AI Agents', 'RAG Evaluation', 'Python', 'FastAPI', 'In Development'],
    role: 'Full-Stack & Systems Developer',
    architectureOverview: 
      'Decoupled evaluation engine isolating test scenario execution from telemetry collection, designed for systematic validation of agentic workflows.',
    engineeringFocus: [
      'Modular evaluation scenario architecture',
      'RAG pipeline grounding verification',
      'Asynchronous test execution pipeline',
      'Defensive error boundaries for non-deterministic model outputs'
    ]
  },
  {
    id: 'flash-flood-prediction',
    name: 'Flash Flood Prediction System',
    tagline: 'Hydrological and environmental data analysis for early flood awareness',
    description: 
      'A predictive system focused on analyzing relevant environmental and historical data to identify the likelihood of flash-flood conditions and support earlier awareness of potential flooding events.',
    status: 'NOT YET DEPLOYED',
    category: 'Predictive ML',
    featured: true,
    githubUrl: 'https://github.com/souvikx18/flash-flood-prediction-system',
    tags: ['Python', 'Predictive Systems', 'Hydrological Analysis', 'Not Yet Deployed'],
    role: 'Predictive Modeling & Backend Engineering',
    architectureOverview: 
      'Data-processing pipeline parsing precipitation, soil saturation, and historical weather patterns to categorize flood risk tiers.',
    engineeringFocus: [
      'Environmental feature extraction and threshold analysis',
      'Data validation against malformed or missing sensor records',
      'Predictive risk categorization logic',
      'Preparation for production containerized deployment'
    ]
  },
  {
    id: 'hireiq',
    name: 'HireIQ',
    tagline: 'Resume-scanning platform with dual role-based workflows for HR and applicants',
    description: 
      'A resume-scanning platform engineered with separate administrative workflows for HR recruiters and student applicants, enabling structured candidate evaluation and document review.',
    status: 'NOT YET DEPLOYED',
    category: 'Full-Stack Workflow',
    featured: false,
    githubUrl: 'https://github.com/souvikx18/HireIQ.git',
    tags: ['Full-Stack', 'Document Scanning', 'Role-Based Workflow', 'Not Yet Deployed'],
    role: 'Full-Stack Developer',
    architectureOverview: 
      'Segmented architecture maintaining separate portals for recruiter evaluation workflows and student submission tracking.',
    engineeringFocus: [
      'Dual-panel role authorization architecture',
      'Document parsing and criterion matching workflow',
      'Clean state segregation between recruiter and applicant scopes'
    ]
  },
  {
    id: 'jarvis',
    name: 'JARVIS',
    tagline: 'Personal voice assistant and automated desktop task manager',
    description: 
      'A localized personal voice assistant platform engineered in Python for speech recognition, spoken query interpretation, and automated task execution.',
    status: 'IN DEVELOPMENT',
    category: 'AI & Systems',
    featured: false,
    githubUrl: 'https://github.com/souvikx18/JARVIS.git',
    tags: ['Python', 'Voice Assistant', 'Automation', 'In Development'],
    role: 'Systems & Python Developer',
    architectureOverview: 
      'Voice input capture pipeline converting audio streams to actionable command intents with local process automation.',
    engineeringFocus: [
      'Audio capture and speech-to-intent pipeline',
      'Subprocess management for desktop automation',
      'Local execution safety boundaries'
    ],
    isPendingDetails: true
  }
];
