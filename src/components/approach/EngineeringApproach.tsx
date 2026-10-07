import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionLabel } from '../ui/SectionLabel';
import { engineeringApproachData } from '../../data';
import { useIntersection } from '../../hooks/useIntersection';

export const EngineeringApproach: React.FC = () => {
  const [sectionRef, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState<number>(0);

  const applications = [
    {
      context: 'Veridyn AI Agent Evaluation Harness',
      decision: 'Before writing FastAPI endpoints, mapped exact operational failure modes of LLM agents under context dilution and non-deterministic tool calling.',
      lesson: 'Constraint isolation eliminates premature framework complexity.'
    },
    {
      context: 'DecisionOS State Engine',
      decision: 'Modeled state as a deterministic mathematical matrix, ensuring multi-factor weighting cannot generate corrupt or NaN client states.',
      lesson: 'State machines prevent edge-case race conditions.'
    },
    {
      context: 'MATEX Chess Web Engine',
      decision: 'Implemented board turn validation natively in React state, maintaining zero-jank 60fps rendering without heavyweight external game engines.',
      lesson: 'Native browser APIs outperform bloated third-party abstractions.'
    },
    {
      context: 'Flash Flood Prediction System',
      decision: 'Stress-tested sensor threshold classifiers against missing sensor logs, anomalous rainfall spikes, and corrupted historical records.',
      lesson: 'Systems must fail predictably and gracefully.'
    },
    {
      context: 'NASSCOM Cybersecurity & CyberOOP',
      decision: 'Refactored object-oriented module architectures to enforce defensive input validation, memory safety considerations, and least-privilege scoping.',
      lesson: 'Security is an architectural foundation, not an afterthought.'
    }
  ];

  const currentStep = engineeringApproachData[activeStep] || engineeringApproachData[0]!;
  const currentApp = applications[activeStep] || applications[0]!;

  return (
    <Section id="approach" ariaLabel="Engineering Approach" className="section-ambient--approach">
      <Container>
        <div ref={sectionRef} data-reveal className={isVisible ? 'is-visible' : ''}>
          <SectionLabel label="02 — ENGINEERING APPROACH" />
          <h2
            style={{
              fontSize: 'var(--text-4xl)',
              lineHeight: 'var(--leading-tight)',
              letterSpacing: 'var(--tracking-tight)',
              marginBottom: '36px',
              maxWidth: '880px'
            }}
          >
            I don't start with the framework. I start with the constraint.
          </h2>

          {/* 5-Step Interactive Tabs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              marginBottom: '28px'
            }}
            role="tablist"
            aria-label="Engineering approach stages"
          >
            {engineeringApproachData.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="approach-detail-panel"
                  onClick={() => setActiveStep(idx)}
                  className="interactive-row"
                  style={{
                    padding: '16px 18px',
                    textAlign: 'left',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-blue)' : 'var(--border)',
                    backgroundColor: isActive ? 'var(--surface-elevated)' : 'var(--surface)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer'
                  }}
                >
                  <p
                    className="font-mono"
                    style={{
                      color: isActive ? 'var(--accent-blue)' : 'var(--text-muted)',
                      margin: '0 0 6px 0',
                      fontSize: '11px',
                      letterSpacing: 'var(--tracking-wide)'
                    }}
                  >
                    {step.stepNumber} &mdash; {step.name.toUpperCase()}
                  </p>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      fontWeight: isActive ? 650 : 500,
                      color: 'var(--text-primary)',
                      margin: 0
                    }}
                  >
                    {step.coreQuestion}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Detail & Empirical Practice Panel */}
          <div
            id="approach-detail-panel"
            className="editorial-card"
            style={{
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}
          >
            <div>
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent-cyan)' }}>
                METHODOLOGICAL PRINCIPLE
              </span>
              <h3 style={{ fontSize: 'var(--text-2xl)', margin: '8px 0 12px 0' }}>
                Stage {currentStep.stepNumber}: {currentStep.name}
              </h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
                {currentStep.explanation}
              </p>
            </div>

            <div
              style={{
                paddingLeft: '24px',
                borderLeft: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent-cyan)' }}>
                APPLIED IN REAL SYSTEMS &bull; {currentApp.context.toUpperCase()}
              </span>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', lineHeight: 'var(--leading-normal)', margin: 0 }}>
                <strong>Decision:</strong> {currentApp.decision}
              </p>
              <p className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>
                <strong>Key Takeaway:</strong> {currentApp.lesson}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
