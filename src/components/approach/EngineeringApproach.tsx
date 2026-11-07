import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { useIntersection } from '../../hooks/useIntersection';
import { approachPrinciples, approachMindset } from '../../data/approach';

export const EngineeringApproach: React.FC = () => {
  const [sectionRef, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  const renderIcon = (type: string) => {
    switch (type) {
      case 'target': // 01 / PROBLEM
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
          </svg>
        );
      case 'layers': // 02 / ARCHITECTURE
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        );
      case 'shield': // 03 / RELIABILITY
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        );
      case 'chart': // 04 / IMPROVEMENT
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
            <line x1="2" y1="20" x2="22" y2="20" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Section id="approach" ariaLabel="Engineering Approach" className="section-ambient--approach" style={{ position: 'relative', overflow: 'hidden' }}>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div ref={sectionRef} data-reveal className={isVisible ? 'is-visible' : ''}>
          {/* Header Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '10px'
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              {/* Gear Outer Outline with teeth */}
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              {/* Code glyph </> inside center */}
              <path d="m9.5 9.5-2 2.5 2 2.5M14.5 9.5l2 2.5-2 2.5M13 8.5l-2 7" strokeWidth="1.8" />
            </svg>
            <span
              className="font-mono"
              style={{
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#38BDF8',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              {approachMindset.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 12px 0'
            }}
          >
            {approachMindset.heading}
          </h2>

          {/* Subtitle */}
          <p
            className="font-mono"
            style={{
              fontSize: '12.5px',
              color: '#94A3B8',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: '0 0 38px 0'
            }}
          >
            {approachMindset.subtitle}
          </p>

          {/* Main 2-Column Responsive Layout */}
          <div className="approach-grid-container">
            {/* Left Column: 2x2 Grid of 4 Engineering Principles */}
            <div className="approach-cards-grid">
              {approachPrinciples.map(principle => (
                <div key={principle.stepNumber} className="approach-card">
                  {/* Icon Box */}
                  <div className="approach-icon-box">
                    {renderIcon(principle.iconType)}
                  </div>

                  {/* Card Content */}
                  <div style={{ flex: 1 }}>
                    <p
                      className="font-mono"
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#38BDF8',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        margin: '0 0 6px 0'
                      }}
                    >
                      {principle.stepNumber} / {principle.category}
                    </p>
                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        margin: '0 0 8px 0',
                        lineHeight: 1.3
                      }}
                    >
                      {principle.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '13px',
                        color: '#94A3B8',
                        margin: 0,
                        lineHeight: 1.55
                      }}
                    >
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Chamfered Cybernetic Mindset Panel */}
            <div className="approach-mindset-outer">
              <div className="approach-mindset-inner">
                {/* Panel Header */}
                <div>
                  <div style={{ marginBottom: '20px' }}>
                    <span
                      className="font-mono"
                      style={{
                        color: '#38BDF8',
                        fontSize: '11.5px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {approachMindset.panelLabel}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(22px, 2.3vw, 28px)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                      margin: '0 0 16px 0',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {approachMindset.headline}
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#94A3B8',
                      lineHeight: 1.65,
                      margin: 0
                    }}
                  >
                    {approachMindset.body}
                  </p>
                </div>

                {/* Priority Footer */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    marginTop: '28px'
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      color: '#64748B',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {approachMindset.priorityLabel}
                  </span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14.5px',
                      fontWeight: 700,
                      color: '#FFFFFF'
                    }}
                  >
                    <span style={{ color: '#38BDF8', fontWeight: 800 }}>/</span>
                    <span>{approachMindset.priorityValue}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scoped CSS for Layout, Chamfers, and Hover Animations */}
      <style>{`
        .approach-grid-container {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: 22px;
          align-items: stretch;
        }

        .approach-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .approach-card {
          background-color: #0B1120;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 24px 20px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .approach-card:hover {
          transform: translateY(-2px);
          border-color: rgba(56, 189, 248, 0.35);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
        }

        .approach-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Chamfered Cybernetic Mindset Card */
        .approach-mindset-outer {
          position: relative;
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.45) 0%, rgba(56, 189, 248, 0.12) 50%, rgba(56, 189, 248, 0.4) 100%);
          clip-path: polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px);
          padding: 1.2px;
          height: 100%;
          display: flex;
        }

        .approach-mindset-inner {
          flex: 1;
          background: rgba(10, 15, 29, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          clip-path: polygon(22px 0%, 100% 0%, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0% 100%, 0% 22px);
          padding: clamp(24px, 2.5vw, 32px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (max-width: 980px) {
          .approach-grid-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 600px) {
          .approach-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};
