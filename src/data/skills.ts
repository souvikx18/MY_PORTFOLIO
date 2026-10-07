import { SkillCategory } from '../types/portfolio';

/**
 * Verified technical skill inventory for Souvik Konar.
 * Operating Directive #07: Defensible skills sourced from verified resume and confirmed projects.
 * Zero percentage bars. Zero keyword stuffing.
 */
export const skillCategoriesData: readonly SkillCategory[] = [
  {
    title: 'LANGUAGES',
    description: 'Core languages used for systems programming, web engineering, and algorithmic problem-solving.',
    skills: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'FRONTEND',
    description: 'User interface architecture, state management, and high-performance responsive web layouts.',
    skills: ['React', 'HTML5', 'Modern CSS', 'Vite', 'Responsive Architecture', 'Accessible Web (WCAG)']
  },
  {
    title: 'BACKEND & DATA',
    description: 'Server architectures, relational data modeling, and secure API boundaries.',
    skills: ['Node.js', 'FastAPI', 'MySQL', 'RESTful API Design', 'Schema Design', 'Data Validation']
  },
  {
    title: 'SECURITY & SYSTEMS',
    description: 'Defensive engineering and algorithmic problem-solving foundations.',
    skills: [
      'Cybersecurity Fundamentals (NASSCOM)',
      'Secure Object-Oriented Design (CyberOOP)',
      'Data Structures & Algorithms',
      'Threat-Aware Software Practices'
    ]
  },
  {
    title: 'AI & AUTOMATION',
    description: 'Agentic workflows, evaluation harnesses, and machine learning pipelines.',
    skills: [
      'AI Agent Evaluation',
      'RAG Pipeline Grounding',
      'LLM APIs & Prompt Engineering',
      'Predictive Modeling (Hydrological / Environmental)'
    ]
  },
  {
    title: 'ENGINEERING WORKFLOWS',
    description: 'Version control, system tooling, and testing disciplines.',
    skills: ['Git', 'GitHub', 'Linux / Shell Basics', 'Automated Testing', 'Defensive Error Handling']
  }
];
