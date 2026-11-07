import { SkillCategory } from '../types/portfolio';

/**
 * Verified technical skill inventory for Souvik Konar.
 * Operating Directive #07: Defensible skills sourced from verified resume and confirmed projects.
 * Zero percentage bars. Zero keyword stuffing.
 */
export const skillCategoriesData: readonly SkillCategory[] = [
  {
    title: 'LANGUAGES',
    description: 'Languages used to develop applications, implement backend logic, work with databases and solve computational problems.',
    skills: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'FRONTEND',
    description: 'Building responsive, component-driven web interfaces with a focus on usability, accessibility, maintainability and performance.',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Vite']
  },
  {
    title: 'BACKEND & DATA',
    description: 'Developing server-side applications, designing REST APIs, integrating relational databases and implementing reliable application logic.',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'SECURITY & SYSTEMS',
    description: 'Applying security fundamentals, defensive programming practices and core computer science concepts to build more reliable software.',
    skills: [
      'Cybersecurity Fundamentals',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Application Security'
    ]
  },
  {
    title: 'AI & AUTOMATION',
    description: 'Developing AI-powered applications, experimenting with machine learning models, integrating LLM APIs and automating multi-step workflows.',
    skills: [
      'LLM API Integration',
      'Prompt Engineering',
      'Machine Learning',
      'AI Agents & Workflow Automation'
    ]
  },
  {
    title: 'ENGINEERING WORKFLOWS',
    description: 'Managing software development workflows through version control, API testing, debugging, documentation and deployment practices.',
    skills: ['Git', 'GitHub', 'Postman', 'Swagger / OpenAPI', 'VS Code', 'Deployment Workflows']
  }
];
