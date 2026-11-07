import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { skillCategoriesData } from '../../data';
import { useIntersection } from '../../hooks/useIntersection';

const renderLanguageIcon = (lang: string) => {
  const normalized = lang.toLowerCase().trim();
  if (normalized === 'python') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M11.91 2c-5.26 0-4.94 2.28-4.94 2.28l.01 2.37h5.02v.71H4.95S2 7.03 2 12.33s2.58 5.17 2.58 5.17h1.54v-2.17s-.08-2.58 2.53-2.58h5.04s2.43.04 2.43-2.37V4.94S16.65 2 11.91 2zM9.06 3.73a.85.85 0 110 1.7.85.85 0 010-1.7z" fill="#38BDF8"/>
        <path d="M12.09 22c5.26 0 4.94-2.28 4.94-2.28l-.01-2.37h-5.02v-.71h7.05s2.95.33 2.95-4.97-2.58-5.17-2.58-5.17h-1.54v2.17s.08 2.58-2.53 2.58H9.85s-2.43-.04-2.43 2.37v7.64S7.35 22 12.09 22zm2.85-1.73a.85.85 0 110-1.7.85.85 0 010 1.7z" fill="#FCD34D"/>
      </svg>
    );
  }
  if (normalized === 'c') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <polygon points="12,2 21.5,7.5 21.5,18.5 12,24 2.5,18.5 2.5,7.5" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.8" />
        <path d="M15.5 8.5 C14.5 7.2 12 7.2 10.5 8.5 C9 10 9 14 10.5 15.5 C12 16.8 14.5 16.8 15.5 15.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized === 'c++') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <polygon points="12,2 21.5,7.5 21.5,18.5 12,24 2.5,18.5 2.5,7.5" fill="#00599C" stroke="#38BDF8" strokeWidth="1.2" />
        <path d="M12 8.5c-.5-.4-1.2-.7-2-.7-1.8 0-3 1.5-3 3.5s1.2 3.5 3 3.5c.8 0 1.5-.3 2-.7" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M14 12h2.5M15.25 10.75v2.5M17.5 12h2.5M18.75 10.75v2.5" stroke="#67E8F9" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalized === 'javascript') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
        <text x="12" y="16.5" fill="#000000" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">JS</text>
      </svg>
    );
  }
  if (normalized === 'typescript') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="3.5" fill="#3178C6" />
        <text x="12" y="16.5" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">TS</text>
      </svg>
    );
  }
  if (normalized === 'sql') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }
  return <span aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>&bull;</span>;
};

const renderFrontendIcon = (tech: string) => {
  const normalized = tech.toLowerCase().trim();
  if (normalized.includes('react')) {
    return (
      <svg width="15" height="15" viewBox="-11.5 -10.23174 23 20.46348" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    );
  }
  if (normalized.includes('html')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26"/>
        <path d="M12 4.5v15.7l5.3-1.6L18.5 4.5H12z" fill="#EF652A"/>
        <path d="M7.5 7.5h9l-.2 2.2H9.8l.2 2.3h6.6l-.6 6.5-4 1.2-4-1.2-.3-3.3h2l.2 1.8 2.1.6 2.1-.6.3-2.8H7.5V7.5z" fill="#FFFFFF"/>
      </svg>
    );
  }
  if (normalized.includes('css')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#1572B6"/>
        <path d="M12 4.5v15.7l5.3-1.6L18.5 4.5H12z" fill="#33A9DC"/>
        <path d="M7.5 7.5h9l-.2 2.2H9.8l.2 2.3h6.6l-.6 6.5-4 1.2-4-1.2-.3-3.3h2l.2 1.8 2.1.6 2.1-.6.3-2.8H7.5V7.5z" fill="#FFFFFF"/>
      </svg>
    );
  }
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
        <text x="12" y="16.5" fill="#000000" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">JS</text>
      </svg>
    );
  }
  if (normalized.includes('tailwind')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#38BDF8" style={{ flexShrink: 0 }}>
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    );
  }
  if (normalized.includes('vite')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M21.5 3.5 12.5 21l-3-6-6-2.5 18-9Z" fill="#BD34FE" stroke="#FFD62E" strokeWidth="1.2"/>
      </svg>
    );
  }
  return <span aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>&bull;</span>;
};

const renderSecurityIcon = (item: string) => {
  const normalized = item.toLowerCase().trim();
  if (normalized.includes('cybersecurity')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    );
  }
  if (normalized.includes('object-oriented') || normalized.includes('oop')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <rect x="2" y="3" width="6" height="6" rx="1"/>
        <rect x="16" y="3" width="6" height="6" rx="1"/>
        <rect x="9" y="15" width="6" height="6" rx="1"/>
        <path d="M5 9v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/>
        <path d="M12 13v2"/>
      </svg>
    );
  }
  if (normalized.includes('data structures') || normalized.includes('algorithms')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="5" r="3"/>
        <circle cx="5" cy="19" r="3"/>
        <circle cx="19" cy="19" r="3"/>
        <path d="m7.2 16.8 3.6-9.6"/>
        <path d="m16.8 16.8-3.6-9.6"/>
      </svg>
    );
  }
  if (normalized.includes('application security')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        <circle cx="12" cy="16" r="1.5" fill="#34D399"/>
      </svg>
    );
  }
  return <span aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>&bull;</span>;
};

const renderBackendIcon = (tech: string) => {
  const normalized = tech.toLowerCase().trim();
  if (normalized.includes('node')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <polygon points="12,2 21,7.2 21,17.8 12,23 3,17.8 3,7.2" fill="#1C3822" stroke="#68A063" strokeWidth="1.6" />
        <path d="M8 17V7l8 10V7" stroke="#84BA64" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (normalized.includes('express')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#1E232A" stroke="#4A5568" strokeWidth="1.2"/>
        <text x="12" y="16" fill="#F7FAFC" fontSize="10" fontWeight="700" fontFamily="sans-serif" letterSpacing="-0.5" textAnchor="middle">ex</text>
      </svg>
    );
  }
  if (normalized.includes('fastapi')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10.5" fill="#059669" />
        <path d="M12.5 4.5 7.5 13.5h4.5l-1 6.5 6-9.5h-4.5z" fill="#FFFFFF"/>
      </svg>
    );
  }
  if (normalized.includes('django')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <rect width="24" height="24" rx="4" fill="#0C4B33" stroke="#44B78B" strokeWidth="1" />
        <text x="12" y="16.5" fill="#44B78B" fontSize="11" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.5" textAnchor="middle">dj</text>
      </svg>
    );
  }
  if (normalized.includes('postgres')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M12 2C7.5 2 4 5 4 9c0 2.8 1.8 5.2 4.5 6.3V21l3-2v-3.2c.2 0 .3.1.5.1 4.5 0 8-3 8-7 0-4-3.5-7-8-7z" fill="#336791"/>
        <circle cx="14.5" cy="8" r="1.2" fill="#FFFFFF"/>
        <path d="M8.5 15.3C7 16 5.5 17.5 5 19.5" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }
  if (normalized.includes('mysql')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M2.5 14c2.5-3.5 6-7 12-6.5 2.5.2 4.5 1.5 5 3-1.5.2-3 1-4.2 2-2.3 2-4 5-4.5 8-2.5-.2-5.5-1.2-8.3-6.5z" fill="#00758F"/>
        <circle cx="15.5" cy="10" r="1.1" fill="#F29111"/>
        <path d="M18 11.5c1.5.5 3 2 3.5 3.5" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }
  return <span aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>&bull;</span>;
};

const renderAiIcon = (item: string) => {
  const normalized = item.toLowerCase().trim();
  if (normalized.includes('llm') || normalized.includes('api')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" fill="#A78BFA" fillOpacity="0.25"/>
      </svg>
    );
  }
  if (normalized.includes('prompt')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <rect x="3" y="4" width="18" height="16" rx="3" fill="#0C243B" stroke="#38BDF8" strokeWidth="1.5"/>
        <path d="m7 10 3 2-3 2M13 14h4" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  if (normalized.includes('machine learning')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <circle cx="6" cy="6" r="2.5" fill="#10B981"/>
        <circle cx="6" cy="18" r="2.5" fill="#10B981"/>
        <circle cx="18" cy="12" r="2.5" fill="#10B981"/>
        <circle cx="12" cy="12" r="2" fill="#34D399"/>
        <line x1="8.5" y1="6" x2="10" y2="12" />
        <line x1="8.5" y1="18" x2="10" y2="12" />
        <line x1="14" y1="12" x2="15.5" y2="12" />
      </svg>
    );
  }
  if (normalized.includes('agent') || normalized.includes('automation')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <rect x="4" y="6" width="16" height="12" rx="3" fill="#1E1B4B" stroke="#818CF8" strokeWidth="1.5"/>
        <circle cx="9" cy="12" r="1.5" fill="#818CF8"/>
        <circle cx="15" cy="12" r="1.5" fill="#818CF8"/>
        <path d="M12 2v4M9 2h6M2 12h2M20 12h2M9 18v2M15 18v2"/>
      </svg>
    );
  }
  return <span aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>&bull;</span>;
};

const renderWorkflowIcon = (item: string) => {
  const normalized = item.toLowerCase().trim();
  if (normalized === 'git') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="6" cy="6" r="3" fill="#F05032"/>
        <circle cx="6" cy="18" r="3" fill="#F05032"/>
        <circle cx="18" cy="9" r="3" fill="#F05032"/>
        <path d="M6 9v6M6 9a9 9 0 0 1 9-3h3" stroke="#F05032" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }
  if (normalized === 'github') {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#E2E8F0"/>
      </svg>
    );
  }
  if (normalized.includes('postman')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
        <path d="M12 6c-3.3 0-6 2.7-6 6 0 1.9.9 3.6 2.3 4.7l1.3-1.6c-.9-.7-1.6-1.9-1.6-3.1 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.2-.6 2.4-1.6 3.1l1.3 1.6c1.4-1.1 2.3-2.8 2.3-4.7 0-3.3-2.7-6-6-6z" fill="#FFFFFF"/>
        <circle cx="12" cy="12" r="1.8" fill="#FFFFFF"/>
      </svg>
    );
  }
  if (normalized.includes('swagger') || normalized.includes('openapi')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="10.5" fill="#173618" stroke="#85EA2D" strokeWidth="1.5"/>
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="#85EA2D" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="1.5" fill="#85EA2D"/>
      </svg>
    );
  }
  if (normalized.includes('vs code') || normalized.includes('vscode')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <path d="M17.5 2 7 10.5 3 7.5 1 9l4 3-4 3 2 1.5 4-3 10.5 8.5L23 20V4z" fill="#007ACC"/>
        <path d="M17.5 7.5 10 12l7.5 4.5z" fill="#FFFFFF" fillOpacity="0.85"/>
      </svg>
    );
  }
  if (normalized.includes('deployment') || normalized.includes('workflow')) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
        <path d="M4.5 16.5c-1.5 0-2.5-1-2.5-2.5 0-1.3 1-2.3 2.2-2.5C4.7 8.5 7.2 6 10.5 6c2.8 0 5.1 1.8 5.8 4.3 1.8.2 3.2 1.7 3.2 3.7 0 2-1.7 3.5-3.5 3.5h-11.5z" fill="#0C253B" stroke="#38BDF8" strokeWidth="1.5"/>
        <path d="m12 11-3 3h2v4h2v-4h2z" fill="#38BDF8" stroke="none"/>
      </svg>
    );
  }
  return <span aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>&bull;</span>;
};

const renderSkillIcon = (category: string, skill: string) => {
  if (category === 'LANGUAGES') {
    return renderLanguageIcon(skill);
  }
  if (category === 'FRONTEND') {
    return renderFrontendIcon(skill);
  }
  if (category === 'BACKEND & DATA') {
    return renderBackendIcon(skill);
  }
  if (category === 'AI & AUTOMATION') {
    return renderAiIcon(skill);
  }
  if (category === 'SECURITY & SYSTEMS') {
    return renderSecurityIcon(skill);
  }
  if (category === 'ENGINEERING WORKFLOWS') {
    return renderWorkflowIcon(skill);
  }
  return <span aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>&bull;</span>;
};

export const SkillInventory: React.FC = () => {
  const [sectionRef, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const selectedCategory = skillCategoriesData[activeCategory] || skillCategoriesData[0]!;

  const skillEvidenceMap: Record<string, string> = {
    LANGUAGES: 'Applied in Veridyn (Python/FastAPI), DecisionOS (TypeScript), MATEX (JavaScript), and Systems (C/C++).',
    FRONTEND: 'Engineered in DecisionOS (Vercel) and MATEX (Netlify) with zero-layout-shift and WCAG AAA compliance.',
    'BACKEND & DATA': 'Implemented in Veridyn async test harness, MySQL relational models, and secure RESTful endpoints.',
    'SECURITY & SYSTEMS': 'Directly validated through NASSCOM Cybersecurity Internship and CyberOOP threat mitigation.',
    'AI & AUTOMATION': 'Built into Veridyn RAG evaluation pipeline and Flash Flood predictive hydrology modeling.',
    'ENGINEERING WORKFLOWS': 'Practiced across all 6 verified GitHub repositories with clean commits and automated testing.'
  };

  return (
    <Section id="stack" ariaLabel="Technical Inventory" className="section-ambient--stack">
      <Container>
        <div ref={sectionRef} data-reveal className={isVisible ? 'is-visible' : ''}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '36px',
              flexWrap: 'wrap',
              gap: '16px'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '11.5px',
                    color: '#38BDF8',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}
                >
                  TECHNICAL INVENTORY
                </span>
              </div>
              <h2
                style={{
                  fontSize: 'var(--text-4xl)',
                  letterSpacing: 'var(--tracking-tight)',
                  margin: 0
                }}
              >
                Verified Competencies &amp; Systems
              </h2>
            </div>
          </div>

          {/* Category Selector Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '28px'
            }}
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategoriesData.map((cat, idx) => {
              const isActive = activeCategory === idx;
              return (
                <button
                  key={cat.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(idx)}
                  className="font-mono"
                  style={{
                    padding: '8px 14px',
                    fontSize: '11px',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-blue)' : 'var(--border)',
                    backgroundColor: isActive ? 'var(--accent-blue)' : 'var(--surface)',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    transition: 'all var(--duration-fast) var(--ease-standard)'
                  }}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Active Category Display & Evidence Cross-Link */}
          <div className="inventory-card-outer">
            <div className="inventory-card-inner">
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--accent-cyan)',
                      letterSpacing: '0.08em',
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}
                  >
                    DISCIPLINE &bull; {selectedCategory.title}
                  </span>
                  <span
                    style={{
                      width: '36px',
                      height: '2px',
                      backgroundColor: '#38BDF8',
                      opacity: 0.85
                    }}
                  />
                </div>
                <h3 style={{ fontSize: 'var(--text-2xl)', margin: '8px 0 12px 0' }}>
                {selectedCategory.title === 'LANGUAGES'
                  ? 'Programming Languages'
                  : selectedCategory.title === 'FRONTEND'
                  ? 'Frontend Development'
                  : selectedCategory.title === 'BACKEND & DATA'
                  ? 'Backend Engineering & Data'
                  : selectedCategory.title === 'AI & AUTOMATION'
                  ? 'AI Engineering & Automation'
                  : selectedCategory.title === 'SECURITY & SYSTEMS'
                  ? 'Security & Computer Science'
                  : selectedCategory.title === 'ENGINEERING WORKFLOWS'
                  ? 'Software Engineering Practices'
                  : selectedCategory.title}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '24px' }}>
                {selectedCategory.description}
              </p>

              <div
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--surface-raised)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-cyan)', display: 'block', marginBottom: '6px' }}>
                  {selectedCategory.title === 'SECURITY & SYSTEMS'
                    ? 'LEARNING & PROJECT APPLICATION'
                    : 'CROSS-REFERENCED PROJECT APPLICATION'}
                </span>
                {selectedCategory.title === 'LANGUAGES' ? (
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      lineHeight: '1.5'
                    }}
                  >
                    <div>Python &mdash; Veridyn (Python/FastAPI)</div>
                    <div>TypeScript &mdash; DecisionOS</div>
                    <div>JavaScript &mdash; MATEX</div>
                    <div>C/C++ &mdash; Systems programming</div>
                    <div>SQL &mdash; Relational database queries and operations.</div>
                  </div>
                ) : selectedCategory.title === 'FRONTEND' ? (
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      lineHeight: '1.5'
                    }}
                  >
                    <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>
                      Applied across web development projects.
                    </div>
                    <div>&bull; React &amp; JavaScript &mdash; Weather Forecasting App</div>
                    <div>&bull; React &amp; Tailwind CSS &mdash; Portfolio Website</div>
                    <div>&bull; HTML &amp; CSS &mdash; Web interface development</div>
                    <div>&bull; Responsive UI &mdash; Multi-device layouts and navigation</div>
                  </div>
                ) : selectedCategory.title === 'BACKEND & DATA' ? (
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      lineHeight: '1.5'
                    }}
                  >
                    <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>
                      Applied across backend development projects.
                    </div>
                    <div>&bull; Node.js &amp; SQL &mdash; Weather Forecasting App</div>
                    <div>&bull; Django &amp; SQL &mdash; Flight Booking System</div>
                    <div>&bull; Node.js &amp; Supabase &mdash; Portfolio Website</div>
                    <div>&bull; FastAPI &mdash; Veridyn</div>
                  </div>
                ) : selectedCategory.title === 'AI & AUTOMATION' ? (
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      lineHeight: '1.5'
                    }}
                  >
                    <div>&bull; Flash Flood Prediction System &mdash; Predictive modeling and environmental data.</div>
                    <div>&bull; HireIQ &mdash; AI resume analysis and skill-gap identification.</div>
                    <div>&bull; JARVIS &mdash; Python-based AI assistant.</div>
                    <div>&bull; Veridyn &mdash; RAG pipeline and evaluation, only if implemented and demonstrable.</div>
                  </div>
                ) : selectedCategory.title === 'SECURITY & SYSTEMS' ? (
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      lineHeight: '1.5'
                    }}
                  >
                    <div>&bull; Cybersecurity Fundamentals &mdash; NASSCOM</div>
                    <div>&bull; Secure Object-Oriented Programming &mdash; CyberOOP</div>
                    <div>&bull; Data Structures &amp; Algorithms &mdash; Python / C++</div>
                    <div>&bull; Application Security &mdash; Input validation and access control</div>
                  </div>
                ) : selectedCategory.title === 'ENGINEERING WORKFLOWS' ? (
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-primary)',
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      lineHeight: '1.5'
                    }}
                  >
                    <div>&bull; Git &amp; GitHub &mdash; Source control and repository management</div>
                    <div>&bull; Postman &mdash; API development and endpoint testing</div>
                    <div>&bull; Swagger / OpenAPI &mdash; API documentation and testing</div>
                    <div>&bull; VS Code &mdash; Development and debugging</div>
                    <div>&bull; Vercel / Netlify &mdash; Web application deployment</div>
                  </div>
                ) : (
                  <p className="font-mono" style={{ fontSize: '11px', color: 'var(--text-primary)', margin: 0 }}>
                    {skillEvidenceMap[selectedCategory.title] || 'Applied across verified production systems.'}
                  </p>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {selectedCategory.title === 'LANGUAGES'
                  ? 'LANGUAGES IN THIS CATEGORY · 06'
                  : selectedCategory.title === 'FRONTEND'
                  ? 'CORE FRONTEND TECHNOLOGIES · 06'
                  : selectedCategory.title === 'BACKEND & DATA'
                  ? 'CORE BACKEND TECHNOLOGIES · 06'
                  : selectedCategory.title === 'AI & AUTOMATION'
                  ? 'CORE AI & AUTOMATION AREAS · 04'
                  : selectedCategory.title === 'SECURITY & SYSTEMS'
                  ? 'CORE KNOWLEDGE AREAS · 04'
                  : selectedCategory.title === 'ENGINEERING WORKFLOWS'
                  ? 'CORE ENGINEERING TOOLS & PRACTICES · 06'
                  : `CORE PRACTICED TOOLS • ${selectedCategory.skills.length} VERIFIED`}
              </span>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: '12px'
                }}
              >
                {selectedCategory.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="font-mono"
                    style={{
                      padding: '12px 14px',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    {renderSkillIcon(selectedCategory.title, skill)}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <style>{`
      /* Chamfered Cybernetic Card Container (matching Engineering Mindset) */
      .inventory-card-outer {
        position: relative;
        background: linear-gradient(135deg, rgba(56, 189, 248, 0.45) 0%, rgba(56, 189, 248, 0.12) 50%, rgba(56, 189, 248, 0.4) 100%);
        clip-path: polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px);
        padding: 1.2px;
        transition: box-shadow 0.3s ease;
      }

      .inventory-card-inner {
        background: rgba(10, 15, 29, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        clip-path: polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px);
        padding: clamp(24px, 3vw, 36px);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 32px;
      }
    `}</style>
  </Section>
);
};
