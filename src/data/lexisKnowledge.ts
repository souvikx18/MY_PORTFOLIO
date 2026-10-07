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
    title: 'DecisionOS — Data-Driven Decision Support Platform',
    category: 'project',
    projectId: 'decisionos',
    source: 'Selected Work → DecisionOS',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 10,
    keywords: ['decisionos', 'decision', 'workflow', 'tradeoff', 'react', 'typescript', 'vercel', 'hosted', 'live', 'deployed'],
    content: 
      'DecisionOS is a data-driven decision-support platform designed to help users structure multi-factor trade-offs, weight dynamic criteria, and eliminate cognitive bias through a deterministic digital workflow. Built with React and TypeScript, it incorporates persistent client-side state engines and zero-layout-shift responsive layouts. Status: HOSTED live on Vercel at https://decision-os-tan.vercel.app/. Repository: https://github.com/souvikx18/DecisionOS.git.'
  },
  {
    id: 'project-matex',
    title: 'MATEX — Chess Engine & Web Application',
    category: 'project',
    projectId: 'matex',
    source: 'Selected Work → MATEX',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 10,
    keywords: ['matex', 'chess', 'engine', 'board', 'game', 'react', 'javascript', 'netlify', 'hosted', 'live', 'play'],
    content: 
      'MATEX is an interactive browser-based chess platform engineered in React and JavaScript. It implements real-time board state validation, turn alternation enforcement, move history tracking, and high-contrast rendering without external heavy game libraries. Status: HOSTED live on Netlify at https://matex-engine.netlify.app/. Repository: https://github.com/souvikx18/Chess-Website--using-REACT.git.'
  },
  {
    id: 'project-flash-flood',
    title: 'Flash Flood Prediction System',
    category: 'project',
    projectId: 'flash-flood-prediction',
    source: 'Selected Work → Flash Flood Prediction System',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 9,
    keywords: ['flash flood', 'flood', 'prediction', 'hydrology', 'weather', 'environmental', 'ml', 'python', 'early warning', 'hazard'],
    content: 
      'The Flash Flood Prediction System is an environmental data platform analyzing historical hydrological metrics, precipitation rates, and soil saturation to assess flash-flood vulnerability and support proactive disaster awareness. Built in Python. Status: NOT YET DEPLOYED (planned for production containerized deployment). Repository: https://github.com/souvikx18/flash-flood-prediction-system.'
  },
  {
    id: 'project-hireiq',
    title: 'HireIQ — Dual-Workflow Resume Scanning Platform',
    category: 'project',
    projectId: 'hireiq',
    source: 'Selected Work → HireIQ',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 9,
    keywords: ['hireiq', 'resume', 'scanner', 'hr', 'students', 'recruiter', 'document', 'workflow', 'panels'],
    content: 
      'HireIQ is a specialized resume evaluation platform engineered with separated administrative workflows for HR recruiters and student applicants. It supports candidate criterion matching, document review pipelines, and clean role-based view isolation. Status: NOT YET DEPLOYED. Repository: https://github.com/souvikx18/HireIQ.git.'
  },
  {
    id: 'project-jarvis',
    title: 'JARVIS — Personal Voice Assistant',
    category: 'project',
    projectId: 'jarvis',
    source: 'Selected Work → JARVIS',
    sourceUrl: '#work',
    visibility: 'PUBLIC',
    lastUpdated: '2026-10-07',
    priority: 8,
    keywords: ['jarvis', 'voice', 'assistant', 'python', 'speech', 'automation', 'desktop', 'commands'],
    content: 
      'JARVIS is a localized desktop voice assistant system developed in Python for audio input capture, natural speech recognition, and automated daily workflow execution. Status: IN DEVELOPMENT (additional architectural details pending completion). Repository: https://github.com/souvikx18/JARVIS.git.'
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
    keywords: ['skills', 'languages', 'frontend', 'python', 'c', 'c++', 'javascript', 'typescript', 'sql', 'react', 'html', 'css', 'vite', 'tech stack'],
    content: 
      'Languages: Python, C, C++, JavaScript (ES6+), TypeScript, and SQL. Frontend technologies: React, Vite, Modern CSS, HTML5, responsive layout architecture, component state design, and WCAG 2.2 AAA accessibility standards. Souvik emphasizes native web capabilities and minimal bundle overhead.'
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
    keywords: ['philosophy', 'approach', 'how', 'methodology', 'understand', 'model', 'build', 'test', 'iterate', 'principles', 'mindset'],
    content: 
      'Souvik operates under the governing principle: "I don\'t start with the framework. I start with the constraint." His 5-step engineering methodology:\n1. Understand: Pinpoint the core operational problem.\n2. Model: Define system boundaries, state flows, and failure points.\n3. Build: Ship the smallest reliable implementation using native capabilities.\n4. Test: Subject the code to edge cases, network throttling, and invalid inputs.\n5. Iterate: Refactor based on measurable evidence and observed behavior.'
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
