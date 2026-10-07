import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionLabel } from '../ui/SectionLabel';
import { skillCategoriesData } from '../../data';
import { useIntersection } from '../../hooks/useIntersection';

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
              <SectionLabel label="03 — TECHNICAL INVENTORY" />
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

            <span
              className="font-mono"
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--text-muted)'
              }}
            >
              ZERO PERCENTAGE BARS &bull; EVIDENCE-LINKED
            </span>
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
          <div
            className="editorial-card"
            style={{
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}
          >
            <div>
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent-cyan)' }}>
                DISCIPLINE &bull; {selectedCategory.title}
              </span>
              <h3 style={{ fontSize: 'var(--text-2xl)', margin: '8px 0 12px 0' }}>
                {selectedCategory.title}
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
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--accent-amber)', display: 'block', marginBottom: '4px' }}>
                  CROSS-REFERENCED PROJECT APPLICATION
                </span>
                <p className="font-mono" style={{ fontSize: '11px', color: 'var(--text-primary)', margin: 0 }}>
                  {skillEvidenceMap[selectedCategory.title] || 'Applied across verified production systems.'}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                CORE PRACTICED TOOLS &bull; {selectedCategory.skills.length} VERIFIED
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
                      gap: '8px'
                    }}
                  >
                    <span aria-hidden="true" style={{ color: 'var(--accent-cyan)' }}>&bull;</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
