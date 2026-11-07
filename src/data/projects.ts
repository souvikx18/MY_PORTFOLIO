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
    tagline: 'AI-powered business intelligence and predictive analytics platform',
    description: 
      'DecisionOS integrates operational business data into a unified intelligence platform using AI-driven analytics, predictive algorithms, multi-tenant data management, and asynchronous processing.',
    status: 'HOSTED',
    category: 'Full-Stack Workflow',
    featured: true,
    githubUrl: 'https://github.com/souvikx18/DecisionOS.git',
    liveUrl: 'https://decision-os-tan.vercel.app/',
    tags: [
      'React 19',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'BullMQ',
      'Gemini AI',
      'WebSockets',
      'Docker'
    ],
    role: 'Full-Stack Developer',
    architectureOverview: 
      'DecisionOS integrates operational business data into a unified intelligence platform using AI-driven analytics, predictive algorithms, multi-tenant data management, and asynchronous processing.',
    problemsFaced: [
      {
        title: 'Unstructured Data Integration',
        description: 'Handling inconsistent CSV and Excel formats with automatic column mapping, validation, and partial-row failures.'
      },
      {
        title: 'Multi-Tenant Data Isolation',
        description: 'Preventing unauthorized cross-organization data access while implementing role-based permissions and secure authentication.'
      },
      {
        title: 'Scalable Background Processing',
        description: 'Managing resource-intensive imports and report generation without blocking API requests through Redis and BullMQ workers.'
      },
      {
        title: 'Real-Time AI Intelligence',
        description: 'Combining anomaly detection, predictive forecasting, AI insights, and real-time notifications into actionable business intelligence.'
      }
    ],
    engineeringFocus: [
      'Unstructured Data Integration: Handling inconsistent CSV and Excel formats with automatic column mapping and validation',
      'Multi-Tenant Data Isolation: Role-based permissions and secure authentication preventing cross-org data access',
      'Scalable Background Processing: Redis and BullMQ workers managing resource-intensive imports and reports',
      'Real-Time AI Intelligence: Anomaly detection, predictive forecasting, AI insights, and real-time notifications'
    ]
  },
  {
    id: 'matex',
    name: 'MateX',
    tagline: 'Interactive chess platform with AI-powered gameplay and immersive learning experience.',
    description: 
      'React-based chess platform integrating chess.js game-state management, custom Minimax AI with Alpha-Beta pruning, and GSAP-powered interactive animations.',
    status: 'HOSTED',
    category: 'Interactive Engine',
    featured: true,
    githubUrl: 'https://github.com/souvikx18/Chess-Website--using-REACT.git',
    liveUrl: 'https://matex-engine.netlify.app/',
    tags: [
      'React 19',
      'JavaScript',
      'Vite',
      'Chess.js',
      'Minimax AI',
      'Alpha-Beta Pruning',
      'GSAP',
      'Lenis',
      'CSS3',
      'Netlify'
    ],
    role: 'Frontend & Engine Developer',
    architectureOverview: 
      'React-based chess platform integrating chess.js game-state management, custom Minimax AI with Alpha-Beta pruning, and GSAP-powered interactive animations.',
    problemsFaced: [
      {
        title: 'Chess Rules & Move Validation',
        description: 'Managing legal moves, checkmate, stalemate, castling, and special chess rules while maintaining accurate board states.'
      },
      {
        title: 'AI Move Evaluation',
        description: 'Building an intelligent opponent using Minimax, Alpha-Beta pruning, piece values, and positional evaluation to select competitive moves.'
      },
      {
        title: 'Interactive Game-State Management',
        description: 'Synchronizing player interactions, AI turns, move history, game controls, and board updates without inconsistent game states.'
      },
      {
        title: 'Animation & Responsive Performance',
        description: 'Coordinating GSAP scroll animations, Lenis smooth scrolling, video backgrounds, and responsive layouts while maintaining a smooth experience.'
      }
    ],
    engineeringFocus: [
      'Chess Rules & Move Validation: Legal moves, checkmate, stalemate, and castling logic',
      'AI Move Evaluation: Minimax with Alpha-Beta pruning and positional piece evaluation',
      'Interactive Game-State Management: Synchronization of turns, history, and board updates',
      'Animation & Performance: GSAP and Lenis smooth scrolling with responsive zero-jank UI'
    ]
  },
  {
    id: 'veridyn',
    name: 'Veridyn',
    tagline: 'Production reliability and continuous verification platform for AI agents.',
    description: 
      'An AI agent evaluation platform integrating automated test execution, configurable evaluation metrics, execution tracing, version tracking, and threshold-based deployment gates to detect regressions before production.',
    status: 'IN DEVELOPMENT',
    category: 'AI & Systems',
    featured: true,
    githubUrl: 'https://github.com/souvikx18/RAG-Agent-Eval-Harness.git',
    tags: [
      'Python 3.11+',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'Pydantic',
      'JWT',
      'HTTPX',
      'Pytest',
      'Next.js',
      'React',
      'TypeScript',
      'Docker'
    ],
    role: 'Full-Stack & Systems Developer',
    architectureOverview: 
      'An AI agent evaluation platform integrating automated test execution, configurable evaluation metrics, execution tracing, version tracking, and threshold-based deployment gates to detect regressions before production.',
    problemsFaced: [
      {
        title: 'Non-Deterministic AI Evaluation',
        description: 'Evaluating inconsistent LLM responses using measurable criteria such as correctness, faithfulness, answer relevance, context recall, and hallucination detection.'
      },
      {
        title: 'Reliable Metric Execution & Scoring',
        description: 'Maintaining consistent evaluation results through configurable metric registries, weighted scoring, validation, and versioned metric configurations.'
      },
      {
        title: 'Secure External Agent Execution',
        description: 'Executing external agent endpoints while preventing SSRF attacks, protecting sensitive credentials, handling timeouts, and recording execution traces.'
      },
      {
        title: 'Automated Deployment Regression Control',
        description: 'Establishing measurable deployment thresholds using evaluation scores, P95 latency, and test pass rates to prevent underperforming agent versions from advancing.'
      }
    ],
    engineeringFocus: [
      'Non-Deterministic AI Evaluation: Measuring correctness, faithfulness, relevance, and hallucinations',
      'Reliable Metric Scoring: Configurable metric registries with weighted scoring and validation',
      'Secure External Agent Execution: SSRF prevention, credential isolation, and timeout controls',
      'Automated Deployment Gates: Evaluation score thresholds and latency gates for CI/CD pipelines'
    ]
  },
  {
    id: 'flash-flood-prediction',
    name: 'Flash Flood Prediction System',
    tagline: 'Geospatial machine learning system for flash flood risk prediction in Himalayan regions.',
    description: 
      'Geospatial intelligence platform combining satellite precipitation data, SRTM Digital Elevation Models, terrain feature extraction, and machine learning-based flood probability assessment through a secure FastAPI backend.',
    status: 'NOT YET DEPLOYED',
    category: 'Predictive ML',
    featured: true,
    githubUrl: 'https://github.com/souvikx18/flash-flood-prediction-system',
    tags: [
      'Python',
      'FastAPI',
      'Scikit-learn',
      'Random Forest',
      'NumPy',
      'Pandas',
      'Rasterio',
      'NetCDF',
      'PostgreSQL',
      'SQLAlchemy',
      'Alembic',
      'JWT',
      'Open-Meteo'
    ],
    role: 'Predictive Modeling & Backend Engineering',
    architectureOverview: 
      'Geospatial intelligence platform combining satellite precipitation data, SRTM Digital Elevation Models, terrain feature extraction, and machine learning-based flood probability assessment through a secure FastAPI backend.',
    problemsFaced: [
      {
        title: 'Multi-Source Geospatial Data Integration',
        description: 'Combining satellite rainfall datasets and SRTM elevation data while handling different spatial resolutions, coordinate systems, and missing values.'
      },
      {
        title: 'Terrain Feature Engineering',
        description: 'Extracting elevation and slope features from DEM raster data using geographic coordinate transformations and gradient calculations for mountainous terrain.'
      },
      {
        title: 'Real-Time Rainfall Data Processing',
        description: 'Converting live precipitation data into multiple temporal rainfall features (1h, 3h, 6h, 12h, and 24h) while handling external API failures and data availability.'
      },
      {
        title: 'Flood Probability & Risk Classification',
        description: 'Integrating engineered environmental features with a Random Forest model to estimate flood probability and classify locations into different risk levels.'
      }
    ],
    engineeringFocus: [
      'Geospatial Data Integration: Aligning satellite precipitation with SRTM elevation rasters',
      'Terrain Feature Engineering: Slope, gradient, and drainage extraction across complex terrain',
      'Real-Time Rainfall Ingestion: Multi-interval temporal rainfall feature transformation (1h-24h)',
      'Flood Risk Classification: Random Forest model estimating location probability risk tiers'
    ]
  },
  {
    id: 'hireiq',
    name: 'HireIQ',
    tagline: 'AI-powered resume screening, candidate evaluation and skill-gap analysis platform.',
    description: 
      'Dual-sided recruitment platform integrating React, Node.js, and Python AI microservices for automated resume parsing, ATS compatibility scoring, candidate-job matching, skill-gap detection, and AI-assisted recruitment workflows.',
    status: 'NOT YET DEPLOYED',
    category: 'Full-Stack Workflow',
    featured: false,
    githubUrl: 'https://github.com/souvikx18/HireIQ.git',
    tags: [
      'React 19',
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'Gemini AI',
      'spaCy',
      'Sentence Transformers',
      'FAISS',
      'PostgreSQL',
      'SQLite',
      'Prisma ORM',
      'JWT',
      'Docker',
      'Nginx'
    ],
    role: 'Full-Stack Developer',
    architectureOverview: 
      'Dual-sided recruitment platform integrating React, Node.js, and Python AI microservices for automated resume parsing, ATS compatibility scoring, candidate-job matching, skill-gap detection, and AI-assisted recruitment workflows.',
    problemsFaced: [
      {
        title: 'Unstructured Resume Data Extraction',
        description: 'Extracting candidate information, education, experience, and technical skills from diverse PDF, DOCX, and TXT formats while handling scanned and poorly formatted documents.'
      },
      {
        title: 'Accurate ATS & Job Compatibility Scoring',
        description: 'Evaluating candidate qualifications against job requirements using skill matching, keyword analysis, semantic AI evaluation, and explainable scoring criteria.'
      },
      {
        title: 'Skill Gap Identification & Prioritization',
        description: 'Identifying missing competencies and comparing candidate skills with role-specific benchmarks to generate prioritized improvement recommendations and learning roadmaps.'
      },
      {
        title: 'AI-Assisted Recruitment Workflow Management',
        description: 'Integrating contextual AI assistance, candidate screening, role-based access, and recruitment analytics across separate recruiter and candidate workflows.'
      }
    ],
    engineeringFocus: [
      'Unstructured Resume Extraction: Robust multi-format parsing across PDF, DOCX, and raw text',
      'ATS Compatibility Scoring: Skill matching and semantic AI evaluation with explainable criteria',
      'Skill Gap Identification: Benchmarking candidate competencies to generate actionable roadmaps',
      'Dual Workflow Architecture: Dedicated role-segregated portals for recruiters and applicants'
    ]
  },
  {
    id: 'jarvis',
    name: 'JARVIS',
    tagline: 'Hands-free conversational AI assistant with live web intelligence and natural voice interaction.',
    description: 
      'AI-powered assistant integrating Google Gemini model orchestration, intent-based web search, browser speech recognition, ElevenLabs voice synthesis, and an interactive real-time system HUD using Next.js and TypeScript.',
    status: 'IN DEVELOPMENT',
    category: 'AI & Systems',
    featured: false,
    githubUrl: 'https://github.com/souvikx18/JARVIS.git',
    tags: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Google Gemini',
      'Vercel AI SDK',
      'ElevenLabs',
      'SearchApi.io',
      'Web Speech API',
      'SpeechSynthesis',
      'Tailwind CSS 4',
      'REST API'
    ],
    role: 'Systems & Full-Stack Developer',
    architectureOverview: 
      'AI-powered assistant integrating Google Gemini model orchestration, intent-based web search, browser speech recognition, ElevenLabs voice synthesis, and an interactive real-time system HUD using Next.js and TypeScript.',
    problemsFaced: [
      {
        title: 'Hands-Free Voice Interaction',
        description: 'Managing continuous speech recognition, wake-word detection, microphone states, and voice command processing while coordinating listening and speaking activities.'
      },
      {
        title: 'AI Model Reliability & Failover',
        description: 'Handling model unavailability, API rate limits, and failed AI requests through multiple Gemini model fallbacks to maintain conversational availability.'
      },
      {
        title: 'Real-Time Web Intelligence Integration',
        description: 'Distinguishing general conversations from time-sensitive queries and dynamically retrieving relevant Google News and web search results without unnecessary API calls.'
      },
      {
        title: 'Natural Voice Synthesis & Audio Control',
        description: 'Integrating ElevenLabs text-to-speech with browser speech synthesis fallback while managing audio playback, interruptions, and synchronized assistant states.'
      }
    ],
    engineeringFocus: [
      'Hands-Free Voice Interaction: Continuous speech recognition, wake words, and state coordination',
      'AI Model Failover: High-availability cascading Gemini model fallbacks against rate limits',
      'Live Web Intelligence: Selective retrieval of real-time search and news for time-sensitive queries',
      'Natural Voice Synthesis: ElevenLabs integration with browser speech fallback and interrupt handling'
    ]
  }
];
