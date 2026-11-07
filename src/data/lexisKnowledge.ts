import { KnowledgeChunk } from '../types/lexis';

/**
 * Comprehensive Verified Knowledge Base for Lexis AI Assistant
 * Implements Master Specification Section 76
 * Covers in-depth architecture, systems engineering, education, skills, and projects.
 */
export const lexisKnowledgeBase: readonly KnowledgeChunk[] = [
  {
    id: 'profile-identity',
    title: 'Personal Identity & Professional Focus',
    category: 'profile',
    source: 'Profile Overview',
    sourceUrl: '#hero',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 10,
    keywords: ['souvik', 'konar', 'who', 'about', 'background', 'engineer', 'developer', 'location', 'kolkata', 'india', 'intro', 'profile', 'summary'],
    content: 
      'Souvik Konar is a 3rd-year Computer Science & Engineering student and software engineer based in Kolkata, India. He builds production-oriented software systems, backend architectures, web applications, and AI evaluation harnesses. His engineering approach emphasizes constraint-first modeling, security fundamentals, clean abstractions, and verifiable technical evidence rather than speculative hype.'
  },
  {
    id: 'profile-education',
    title: 'Academic Records & University Education',
    category: 'education',
    source: 'About Section → Academic Record',
    sourceUrl: '#about',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 10,
    keywords: ['education', 'degree', 'university', 'college', 'brainware', 'cgpa', 'grades', 'btech', 'academic', 'marks', 'school', '12th', '10th', 'board', 'studies', 'study'],
    content: 
      'Souvik is pursuing a B.Tech in Computer Science & Engineering at Brainware University, Kolkata (Batch 2024–2028, currently in 3rd Year). His academic record reflects consistent excellence: a 2nd Year CGPA of 8.64 and a 1st Year CGPA of 7.91. Before university, he completed Higher Secondary (12th) under the WBCHSE Board in 2024 with 68.4%, and Secondary (10th) under the WBBSE Board in 2022 with 53.43%.'
  },
  {
    id: 'profile-internship',
    title: 'NASSCOM Cybersecurity & CyberOOP Internship',
    category: 'experience',
    source: 'About Section → Practical Experience',
    sourceUrl: '#about',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 9,
    keywords: ['internship', 'nasscom', 'cybersecurity', 'security', 'cyberooop', 'experience', 'defensive', 'threat', 'oop', 'training', 'credentials'],
    content: 
      'Souvik completed a structured technical internship with NASSCOM specializing in Cybersecurity and Secure Object-Oriented Programming (CyberOOP). He gained direct practical exposure to threat modeling, secure coding standards, input validation, memory safety concepts, and defensive architectural design to mitigate application vulnerabilities.'
  },
  {
    id: 'profile-availability',
    title: 'Career Opportunities & Availability',
    category: 'contact',
    source: 'Contact Directory',
    sourceUrl: '#contact',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 10,
    keywords: ['hire', 'available', 'availability', 'job', 'internship', 'opportunity', 'work', 'roles', 'full-time', 'contract', 'freelance', 'collaborate', 'hiring'],
    content: 
      'Souvik is actively open to software engineering opportunities, including software engineering internships, junior developer roles, and technical collaborations in full-stack engineering, backend systems, and AI workflows. He is ready to contribute immediately with strong foundations in DSA, systems thinking, and production discipline.'
  },
  {
    id: 'profile-personal',
    title: 'Personal Details, Hobbies & Languages',
    category: 'profile',
    source: 'Resume Verified Records',
    sourceUrl: '#about',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 7,
    keywords: ['hobby', 'hobbies', 'interests', 'cricket', 'gaming', 'video editing', 'languages', 'hindi', 'bengali', 'english', 'personal', 'dob', 'birth'],
    content: 
      'Souvik is fluent in English, Hindi, and Bengali. Beyond software engineering, his personal interests include playing cricket, tactical gaming, and digital video editing. He was born on August 28, 2006, and is permanently based in West Bengal, India.'
  },
  {
    id: 'project-veridyn',
    title: 'Veridyn — AI Agent Evaluation Platform',
    category: 'project',
    projectId: 'veridyn',
    source: 'Selected Work → Veridyn',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 10,
    keywords: ['veridyn', 'rag', 'eval', 'harness', 'agent', 'evaluation', 'fastapi', 'python', 'ai', 'benchmark', 'testing'],
    content: 
      'Veridyn is an automated evaluation harness engineered to stress-test and benchmark AI agents and RAG (Retrieval-Augmented Generation) pipelines under realistic operational constraints. Built with Python and FastAPI, it systematically tests reasoning fidelity, tool invocation reliability, retrieval grounding, and prompt degradation. Status: Currently under active development (NOT currently hosted). Repository: https://github.com/souvikx18/RAG-Agent-Eval-Harness.git.'
  },
  {
    id: 'project-decisionos',
    title: 'DecisionOS — AI-Powered Business Intelligence & Predictive Analytics Platform',
    category: 'project',
    projectId: 'decisionos',
    source: 'Selected Work → DecisionOS',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-11-07',
    priority: 10,
    keywords: [
      'decisionos',
      'business intelligence',
      'predictive analytics',
      'react 19',
      'node',
      'express',
      'postgresql',
      'prisma',
      'redis',
      'bullmq',
      'gemini ai',
      'websockets',
      'docker',
      'hosted',
      'vercel'
    ],
    content: 
      'DecisionOS integrates operational business data into a unified intelligence platform using AI-driven analytics, predictive algorithms, multi-tenant data management, and asynchronous processing. Problems solved include unstructured data integration (inconsistent CSV/Excel mapping), multi-tenant data isolation, scalable background processing (Redis & BullMQ workers), and real-time AI intelligence with Gemini AI. Tech stack: React 19, Node.js, Express.js, PostgreSQL, Prisma, Redis, BullMQ, Gemini AI, WebSockets, Docker. Status: HOSTED live on Vercel at https://decision-os-tan.vercel.app/. Repository: https://github.com/souvikx18/DecisionOS.git.'
  },
  {
    id: 'project-matex',
    title: 'MateX — Interactive Chess Platform with AI & GSAP',
    category: 'project',
    projectId: 'matex',
    source: 'Selected Work → MateX',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-11-07',
    priority: 10,
    keywords: ['matex', 'chess', 'chess.js', 'minimax', 'alpha-beta', 'gsap', 'lenis', 'react 19', 'javascript', 'netlify', 'hosted', 'live'],
    content: 
      'MateX is an interactive chess platform integrating chess.js game-state management, custom Minimax AI with Alpha-Beta pruning, and GSAP-powered interactive animations. Solves complex chess rule & move validation, AI move evaluation with positional scoring, interactive game-state synchronization, and responsive smooth animations via GSAP and Lenis. Tech stack: React 19, JavaScript, Vite, Chess.js, Minimax AI, Alpha-Beta Pruning, GSAP, Lenis, CSS3, Netlify. Status: HOSTED live on Netlify at https://matex-engine.netlify.app/. Repository: https://github.com/souvikx18/Chess-Website--using-REACT.git.'
  },
  {
    id: 'project-veridyn',
    title: 'Veridyn — RAG & Agent Evaluation Harness',
    category: 'project',
    projectId: 'veridyn',
    source: 'Selected Work → Veridyn',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-11-07',
    priority: 10,
    keywords: ['veridyn', 'rag', 'eval', 'ai agents', 'fastapi', 'python', 'docker', 'benchmarking', 'regression', 'metrics'],
    content: 
      'Veridyn is a production reliability and continuous verification platform for AI agents. Integrates automated test execution, configurable evaluation metrics (correctness, faithfulness, relevance, hallucination detection), execution tracing, version tracking, and threshold-based deployment gates to detect regressions before production. Tech stack: Python 3.11+, FastAPI, PostgreSQL, SQLAlchemy, Alembic, Pydantic, JWT, HTTPX, Pytest, Next.js, React, TypeScript, Docker. Status: IN DEVELOPMENT. Repository: https://github.com/souvikx18/RAG-Agent-Eval-Harness.git.'
  },
  {
    id: 'project-flash-flood',
    title: 'Flash Flood Prediction System — Geospatial ML Platform',
    category: 'project',
    projectId: 'flash-flood-prediction',
    source: 'Selected Work → Flash Flood Prediction System',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-11-07',
    priority: 9,
    keywords: ['flash flood', 'flood', 'prediction', 'hydrology', 'geospatial', 'srtm', 'dem', 'ml', 'random forest', 'python', 'fastapi', 'rasterio'],
    content: 
      'Geospatial intelligence platform combining satellite precipitation data, SRTM Digital Elevation Models (DEM), terrain feature extraction, and machine learning-based flood probability assessment through a secure FastAPI backend. Solves multi-source geospatial data integration, terrain feature engineering (slope, gradient), real-time precipitation processing (1h-24h temporal intervals via Open-Meteo), and Random Forest flood risk tier classification. Tech stack: Python, FastAPI, Scikit-learn, Random Forest, NumPy, Pandas, Rasterio, NetCDF, PostgreSQL, SQLAlchemy, Alembic, JWT, Open-Meteo. Status: NOT YET DEPLOYED. Repository: https://github.com/souvikx18/flash-flood-prediction-system.'
  },
  {
    id: 'project-hireiq',
    title: 'HireIQ — AI Recruitment Intelligence & ATS Platform',
    category: 'project',
    projectId: 'hireiq',
    source: 'Selected Work → HireIQ',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-11-07',
    priority: 9,
    keywords: ['hireiq', 'resume', 'ats', 'recruitment', 'gemini ai', 'spacy', 'sentence transformers', 'faiss', 'prisma', 'docker'],
    content: 
      'HireIQ is an AI-powered resume screening, candidate evaluation and skill-gap analysis platform. Features dual-sided workflows for recruiters and applicants, integrating React, Node.js, and Python AI microservices for automated multi-format resume parsing (PDF, DOCX, TXT), ATS compatibility scoring, FAISS semantic matching, and prioritized learning roadmaps. Tech stack: React 19, Node.js, Express.js, Python, FastAPI, Gemini AI, spaCy, Sentence Transformers, FAISS, PostgreSQL, SQLite, Prisma ORM, JWT, Docker, Nginx. Status: NOT YET DEPLOYED. Repository: https://github.com/souvikx18/HireIQ.git.'
  },
  {
    id: 'project-jarvis',
    title: 'JARVIS — Personal Voice AI Assistant',
    category: 'project',
    projectId: 'jarvis',
    source: 'Selected Work → JARVIS',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-11-07',
    priority: 8,
    keywords: ['jarvis', 'voice', 'assistant', 'gemini', 'elevenlabs', 'next.js', 'vercel ai sdk', 'web speech api', 'hud', 'speech synthesis'],
    content: 
      'JARVIS is a hands-free conversational AI assistant with live web intelligence and natural voice interaction. Integrates Google Gemini model orchestration with cascading failovers, intent-based Google News and web search retrieval via SearchApi.io, browser speech recognition, ElevenLabs voice synthesis with native speech fallback, and an interactive real-time system HUD using Next.js and TypeScript. Tech stack: Next.js 16, React 19, TypeScript, Google Gemini, Vercel AI SDK, ElevenLabs, SearchApi.io, Web Speech API, SpeechSynthesis, Tailwind CSS 4, REST API. Status: IN DEVELOPMENT. Repository: https://github.com/souvikx18/JARVIS.git.'
  },
  {
    id: 'projects-summary',
    title: 'Project Portfolio Overview & Status Breakdown',
    category: 'project',
    source: 'Selected Work',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 10,
    keywords: ['projects', 'portfolio', 'list', 'all', 'what built', 'work', 'status', 'hosted', 'deployed', 'github'],
    content: 
      'Souvik\'s portfolio features 6 verified projects with strict deployment integrity:\n1. DecisionOS — Data-Driven Decision Support (HOSTED on Vercel)\n2. MATEX — Interactive Chess Engine Web App (HOSTED on Netlify)\n3. Veridyn — AI Agent Evaluation Platform (IN DEVELOPMENT)\n4. JARVIS — Personal Voice Assistant (IN DEVELOPMENT)\n5. Flash Flood Prediction System — Predictive Hydrology System (NOT YET DEPLOYED)\n6. HireIQ — Dual-Panel Resume Scanner (NOT YET DEPLOYED)\nNo fake demo buttons or fabricated metrics are used.'
  },
  {
    id: 'skills-languages-frontend',
    title: 'Technical Skills — Languages & Frontend',
    category: 'skill',
    source: 'Technical Inventory',
    sourceUrl: '#stack',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 9,
    keywords: ['skills', 'languages', 'frontend', 'python', 'c', 'c++', 'javascript', 'typescript', 'sql', 'react', 'html', 'css', 'tailwind', 'vite', 'tech stack'],
    content: 
      'Languages: Python, C, C++, JavaScript, TypeScript, and SQL. Frontend technologies: React.js, HTML5, CSS3, JavaScript, Tailwind CSS, and Vite. Souvik builds responsive, component-driven web interfaces with a focus on usability, accessibility, maintainability, and performance.'
  },
  {
    id: 'skills-backend-systems',
    title: 'Technical Skills — Backend, Data & Security',
    category: 'skill',
    source: 'Technical Inventory',
    sourceUrl: '#stack',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 9,
    keywords: ['skills', 'backend', 'fastapi', 'node', 'mysql', 'security', 'cybersecurity', 'dsa', 'git', 'testing', 'apis', 'database'],
    content: 
      'Backend & Systems: FastAPI, Node.js, RESTful API design, data validation, and asynchronous processing. Databases: MySQL, relational schema modeling, normalization, and SQL optimization. Core foundations: NASSCOM-certified cybersecurity, secure object-oriented programming (CyberOOP), Data Structures & Algorithms, Git/GitHub, and defensive error boundaries.'
  },
  {
    id: 'philosophy-engineering',
    title: 'Engineering Philosophy & Methodology',
    category: 'philosophy',
    source: 'Engineering Approach',
    sourceUrl: '#approach',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 9,
    keywords: ['philosophy', 'approach', 'how', 'methodology', 'problem', 'architecture', 'reliability', 'improvement', 'principles', 'mindset', 'clarity over complexity'],
    content: 
      'Souvik operates under the core philosophy: "I care about what happens beyond the code." His 4-pillar engineering methodology:\n1. 01 / PROBLEM: Understand before building — Identify the real problem, user needs, and constraints before choosing a solution.\n2. 02 / ARCHITECTURE: Design for clarity — Choose simple, maintainable structures with clear responsibilities and data flow.\n3. 03 / RELIABILITY: Build for real conditions — Consider validation, failure cases, security, and performance—not just the happy path.\n4. 04 / IMPROVEMENT: Measure and refine — Test assumptions, learn from failures, and improve based on evidence.\n\nEngineering Mindset: "Simple solutions. Thoughtful decisions. I don\'t choose technologies just because they are popular. I evaluate the problem, constraints, trade-offs and long-term maintainability before making technical decisions." Priority: Clarity over complexity.'
  },
  {
    id: 'contact-channels',
    title: 'Contact Channels & Verified Endpoints',
    category: 'contact',
    source: 'Contact Directory',
    sourceUrl: '#contact',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 10,
    keywords: ['contact', 'email', 'phone', 'linkedin', 'github', 'telegram', 'message', 'reach', 'connect', 'call'],
    content: 
      'Verified contact channels for Souvik Konar:\n• Email: skonar566@gmail.com\n• Phone: +91 9907488093\n• LinkedIn: https://www.linkedin.com/in/souvik-konarx18\n• GitHub: https://github.com/souvikx18\n• Telegram: @asyncX18 (https://t.me/asyncX18)\nAll endpoints are verified and actively monitored.'
  }
];
