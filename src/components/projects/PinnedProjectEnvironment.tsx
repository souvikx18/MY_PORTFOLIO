import React, { useState } from 'react';
import { Project, ProjectStatus } from '../../types/portfolio';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';
import {
  DecisionOSEvidence,
  MATEXEvidence,
  VeridynEvidence,
  FlashFloodEvidence,
  HireIQEvidence,
  JARVISEvidence
} from './evidence';

interface PinnedProjectEnvironmentProps {
  projects: readonly Project[];
}

type FilterOption = 'ALL' | ProjectStatus;

export const PinnedProjectEnvironment: React.FC<PinnedProjectEnvironmentProps> = ({ projects }) => {
  const [filter, setFilter] = useState<FilterOption>('ALL');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.status === filter);

  // Safeguard activeIndex within filtered bounds
  const currentProject = filteredProjects[activeIndex] || filteredProjects[0] || projects[0]!;
  const currentTotal = filteredProjects.length;
  const displayIndex = String((filteredProjects.indexOf(currentProject) + 1) || 1).padStart(2, '0');
  const displayTotal = String(currentTotal).padStart(2, '0');

  // Render project-specific visual evidence artifact
  const renderEvidenceArtifact = (id: string) => {
    switch (id) {
      case 'decisionos':
        return <DecisionOSEvidence />;
      case 'matex':
        return <MATEXEvidence />;
      case 'veridyn':
        return <VeridynEvidence />;
      case 'flash-flood-prediction':
        return <FlashFloodEvidence />;
      case 'hireiq':
        return <HireIQEvidence />;
      case 'jarvis':
        return <JARVISEvidence />;
      default:
        return <DecisionOSEvidence />;
    }
  };

  const filterButtons: FilterOption[] = ['ALL', 'HOSTED', 'IN DEVELOPMENT', 'NOT YET DEPLOYED'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Recruiter Status Filter Bar */}
      <div
        role="toolbar"
        aria-label="Filter projects by deployment status"
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)',
            marginRight: '6px'
          }}
        >
          FILTER:
        </span>

        {filterButtons.map(opt => {
          const isActive = filter === opt;
          const count = opt === 'ALL' ? projects.length : projects.filter(p => p.status === opt).length;

          return (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setFilter(opt);
                setActiveIndex(0);
              }}
              aria-pressed={isActive}
              className="font-mono"
              style={{
                minHeight: '34px',
                padding: '0 12px',
                fontSize: 'var(--text-xs)',
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
              {opt} ({count})
            </button>
          );
        })}
      </div>

      {/* Pinned Sticky Editorial Container */}
      <div className="pinned-env-grid">
        {/* Left Column: Project Narrative & Sequential Progression */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Step Indicator & Project Navigation Dots */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '16px'
            }}
          >
            <div className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-cyan)' }}>
              PROJECT SEQUENCE &bull; {displayIndex} / {displayTotal}
            </div>

            <div style={{ display: 'flex', gap: '6px' }} role="tablist" aria-label="Select project">
              {filteredProjects.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={currentProject.id === p.id}
                  aria-label={`View project ${p.name}`}
                  onClick={() => setActiveIndex(idx)}
                  className="font-mono"
                  style={{
                    width: '32px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    border: '1px solid',
                    borderColor: currentProject.id === p.id ? 'var(--accent-blue)' : 'var(--border)',
                    backgroundColor: currentProject.id === p.id ? 'var(--accent-blue)' : 'var(--surface-raised)',
                    color: currentProject.id === p.id ? '#FFFFFF' : 'var(--text-muted)',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer'
                  }}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <article
            className="editorial-card"
            style={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span
                  className="font-mono"
                  style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}
                >
                  {currentProject.category.toUpperCase()} &bull; {currentProject.role.toUpperCase()}
                </span>
                <h3 style={{ fontSize: 'var(--text-3xl)', margin: 0, fontWeight: 650 }}>
                  {currentProject.name}
                </h3>
              </div>
              <StatusBadge status={currentProject.status} />
            </div>

            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-primary)', fontWeight: 500, margin: 0 }}>
              {currentProject.tagline}
            </p>

            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              {currentProject.description}
            </p>

            {/* Architecture Overview */}
            <div
              style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent-cyan)' }}>
                SYSTEM ARCHITECTURE &amp; APPROACH
              </span>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>
                {currentProject.architectureOverview}
              </p>
            </div>

            {/* Key Implementation Deliverables */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--accent-cyan)' }}>
                KEY IMPLEMENTATION EVIDENCE
              </span>
              <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {currentProject.engineeringFocus.map((focusItem, fIdx) => (
                  <li key={fIdx} style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    {focusItem}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions & Repositories */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                alignItems: 'center'
              }}
            >
              {currentProject.liveUrl && (
                <Button
                  href={currentProject.liveUrl}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ minHeight: '38px', padding: '0 16px', fontSize: 'var(--text-xs)' }}
                >
                  Live Deployment &nearr;
                </Button>
              )}

              <Button
                href={currentProject.githubUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ minHeight: '38px', padding: '0 16px', fontSize: 'var(--text-xs)' }}
              >
                GitHub Repository &nearr;
              </Button>
            </div>
          </article>
        </div>

        {/* Right Column: Dynamic Interactive Evidence Viewport */}
        <div className="pinned-evidence-viewport">
          <div style={{ position: 'sticky', top: '100px' }}>
            {renderEvidenceArtifact(currentProject.id)}
          </div>
        </div>
      </div>

      <style>{`
        .pinned-env-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 992px) {
          .pinned-env-grid {
            grid-template-columns: 1.15fr 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
};
