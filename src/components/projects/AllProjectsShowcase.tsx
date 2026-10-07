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

interface AllProjectsShowcaseProps {
  projects: readonly Project[];
}

type FilterOption = 'ALL' | ProjectStatus;

export const AllProjectsShowcase: React.FC<AllProjectsShowcaseProps> = ({ projects }) => {
  const [filter, setFilter] = useState<FilterOption>('ALL');
  const [viewMode, setViewMode] = useState<'showcase' | 'compact'>('showcase');
  const [expandedEvidenceIds, setExpandedEvidenceIds] = useState<Set<string>>(new Set());

  const toggleEvidence = (id: string) => {
    setExpandedEvidenceIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.status === filter);

  const filterButtons: FilterOption[] = ['ALL', 'HOSTED', 'IN DEVELOPMENT', 'NOT YET DEPLOYED'];

  // Map project ID to its interactive evidence simulator
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
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      {/* Editorial Control Toolbar */}
      <div
        className="editorial-card"
        style={{
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          borderLeft: '3px solid var(--accent-blue)'
        }}
      >
        {/* Status Filter Tabs */}
        <div
          role="toolbar"
          aria-label="Filter verified projects by deployment status"
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              marginRight: '4px'
            }}
          >
            STATUS:
          </span>

          {filterButtons.map(opt => {
            const isActive = filter === opt;
            const count = opt === 'ALL'
              ? projects.length
              : projects.filter(p => p.status === opt).length;

            return (
              <button
                key={opt}
                type="button"
                onClick={() => setFilter(opt)}
                aria-pressed={isActive}
                className="font-mono"
                style={{
                  minHeight: '32px',
                  padding: '0 12px',
                  fontSize: '11px',
                  letterSpacing: '0.04em',
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

        {/* View Layout Toggle */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center'
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              marginRight: '4px'
            }}
          >
            LAYOUT:
          </span>

          <button
            type="button"
            onClick={() => setViewMode('showcase')}
            aria-pressed={viewMode === 'showcase'}
            className="font-mono"
            style={{
              minHeight: '32px',
              padding: '0 12px',
              fontSize: '11px',
              border: '1px solid',
              borderColor: viewMode === 'showcase' ? 'var(--accent-blue)' : 'var(--border)',
              backgroundColor: viewMode === 'showcase' ? 'var(--accent-blue-subtle)' : 'transparent',
              color: viewMode === 'showcase' ? 'var(--accent-blue)' : 'var(--text-muted)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer'
            }}
          >
            SHOWCASE VIEW
          </button>

          <button
            type="button"
            onClick={() => setViewMode('compact')}
            aria-pressed={viewMode === 'compact'}
            className="font-mono"
            style={{
              minHeight: '32px',
              padding: '0 12px',
              fontSize: '11px',
              border: '1px solid',
              borderColor: viewMode === 'compact' ? 'var(--accent-blue)' : 'var(--border)',
              backgroundColor: viewMode === 'compact' ? 'var(--accent-blue-subtle)' : 'transparent',
              color: viewMode === 'compact' ? 'var(--accent-blue)' : 'var(--text-muted)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer'
            }}
          >
            COMPACT INDEX
          </button>
        </div>
      </div>

      {/* Quick Anchor Jump Bar */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '11px',
            color: 'var(--text-muted)'
          }}
        >
          JUMP TO:
        </span>
        {projects.map((p, idx) => (
          <a
            key={p.id}
            href={`#project-${p.id}`}
            className="font-mono"
            style={{
              fontSize: '11px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              padding: '2px 8px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--surface-raised)',
              border: '1px solid var(--border-subtle)',
              transition: 'all var(--duration-fast) var(--ease-standard)'
            }}
          >
            {String(idx + 1).padStart(2, '0')}. {p.name}
          </a>
        ))}
      </div>

      {/* SHOWCASE VIEW: Full Editorial Technical Breakdown with Live Interactive Evidence */}
      {viewMode === 'showcase' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {filteredProjects.map(project => {
            const originalIndex = projects.findIndex(p => p.id === project.id) + 1;
            const formattedIndex = String(originalIndex).padStart(2, '0');

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="editorial-card"
                style={{
                  padding: 'clamp(24px, 4vw, 40px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top Editorial Index & Meta Bar */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                    paddingBottom: '20px',
                    marginBottom: '28px',
                    borderBottom: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      {formattedIndex} / {String(projects.length).padStart(2, '0')}
                    </span>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {project.category} &bull; {project.role}
                    </span>
                  </div>

                  <StatusBadge status={project.status} />
                </div>

                {/* 2-Column Responsive Layout: Engineering Narrative on Left, Live Interactive Evidence on Right */}
                <div
                  className="project-showcase-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '36px',
                    alignItems: 'start'
                  }}
                >
                  {/* Left Column: Project Overview & Engineering Decisions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                      <h3
                        style={{
                          fontSize: 'var(--text-3xl)',
                          letterSpacing: 'var(--tracking-tight)',
                          margin: '0 0 10px 0',
                          color: 'var(--text-primary)'
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        style={{
                          fontSize: 'var(--text-base)',
                          color: 'var(--text-secondary)',
                          lineHeight: 'var(--leading-snug)',
                          margin: 0
                        }}
                      >
                        {project.tagline}
                      </p>
                    </div>

                    {/* Architecture Overview */}
                    <div
                      style={{
                        padding: '16px',
                        backgroundColor: 'var(--surface-raised)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <div
                        className="font-mono"
                        style={{
                          fontSize: '11px',
                          color: 'var(--accent-cyan)',
                          marginBottom: '8px',
                          letterSpacing: '0.05em'
                        }}
                      >
                        SYSTEM ARCHITECTURE OVERVIEW:
                      </div>
                      <p
                        style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--text-primary)',
                          lineHeight: 'var(--leading-normal)',
                          margin: 0
                        }}
                      >
                        {project.architectureOverview}
                      </p>
                    </div>

                    {/* Verified Engineering Focus Points */}
                    <div>
                      <div
                        className="font-mono"
                        style={{
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                          marginBottom: '10px',
                          letterSpacing: '0.05em'
                        }}
                      >
                        CORE IMPLEMENTATION FOCUS:
                      </div>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}
                      >
                        {project.engineeringFocus.map((focus, fIdx) => (
                          <li
                            key={fIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'baseline',
                              gap: '10px',
                              fontSize: 'var(--text-sm)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            <span
                              style={{
                                color: 'var(--accent-cyan)',
                                fontSize: '12px'
                              }}
                              aria-hidden="true"
                            >
                              &#10003;
                            </span>
                            <span>{focus}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                      <div
                        className="font-mono"
                        style={{
                          fontSize: '11px',
                          color: 'var(--text-muted)',
                          marginBottom: '8px',
                          letterSpacing: '0.05em'
                        }}
                      >
                        TECHNOLOGY STACK:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="font-mono"
                            style={{
                              fontSize: '11px',
                              padding: '3px 8px',
                              borderRadius: 'var(--radius-sm)',
                              backgroundColor: 'var(--surface)',
                              border: '1px solid var(--border-subtle)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Verified Action Links */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '12px',
                        alignItems: 'center',
                        paddingTop: '8px'
                      }}
                    >
                      {project.status === 'HOSTED' && project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          variant="primary"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Launch live deployed build of ${project.name} on external hosting`}
                        >
                          Launch Live Build &rarr;
                        </Button>
                      )}

                      {project.githubUrl && (
                        <Button
                          href={project.githubUrl}
                          variant="secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Inspect source code repository for ${project.name} on GitHub`}
                        >
                          Source Repository &rarr;
                        </Button>
                      )}

                      {project.status === 'IN DEVELOPMENT' && (
                        <span
                          className="font-mono"
                          style={{
                            fontSize: '11px',
                            color: 'var(--status-dev-text)',
                            padding: '4px 8px',
                            backgroundColor: 'var(--status-dev-bg)',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--status-dev-border)'
                          }}
                        >
                          Active Development &bull; Telemetry In Progress
                        </span>
                      )}

                      {project.status === 'NOT YET DEPLOYED' && (
                        <span
                          className="font-mono"
                          style={{
                            fontSize: '11px',
                            color: 'var(--status-pending-text)',
                            padding: '4px 8px',
                            backgroundColor: 'var(--status-pending-bg)',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--status-pending-border)'
                          }}
                        >
                          Production Deployment Scheduled
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Evidence Artifact Simulator (Loaded on Demand) */}
                  <div style={{ width: '100%' }}>
                    {expandedEvidenceIds.has(project.id) ? (
                      <div className="evidence-panel-expanded" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <button
                            type="button"
                            onClick={() => toggleEvidence(project.id)}
                            className="font-mono"
                            style={{
                              fontSize: '11px',
                              color: 'var(--text-muted)',
                              backgroundColor: 'transparent',
                              border: '1px solid var(--border-subtle)',
                              padding: '4px 8px',
                              borderRadius: 'var(--radius-sm)',
                              cursor: 'pointer'
                            }}
                          >
                            Hide Architecture &and;
                          </button>
                        </div>
                        {renderEvidenceArtifact(project.id)}
                      </div>
                    ) : (
                      <div
                        className="editorial-card"
                        style={{
                          padding: '32px 24px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                          gap: '14px',
                          background: 'linear-gradient(145deg, var(--surface-raised) 0%, var(--surface) 100%)',
                          border: '1px dashed var(--border-active)',
                          minHeight: '260px'
                        }}
                      >
                        <div
                          className="font-mono"
                          style={{
                            fontSize: '11px',
                            color: 'var(--accent-cyan)',
                            letterSpacing: '0.06em'
                          }}
                        >
                          SYSTEM ARCHITECTURE &bull; {project.name.toUpperCase()}
                        </div>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', maxWidth: '360px', margin: 0, lineHeight: 1.5 }}>
                          Live simulation, architecture schemas, and execution telemetry load on request.
                        </p>
                        <button
                          type="button"
                          onClick={() => toggleEvidence(project.id)}
                          className="btn-secondary font-mono"
                          style={{
                            fontSize: '12px',
                            padding: '10px 18px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            borderColor: 'var(--accent-cyan)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <span style={{ color: 'var(--accent-cyan)' }}>&#9654;</span> Inspect System Architecture &amp; Evidence
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* COMPACT INDEX VIEW: Architectural Comparison Matrix */}
      {viewMode === 'compact' && (
        <div className="editorial-card" style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '680px'
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  backgroundColor: 'var(--surface-raised)'
                }}
              >
                <th style={{ padding: '14px 18px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  NO.
                </th>
                <th style={{ padding: '14px 18px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  SYSTEM / PROJECT
                </th>
                <th style={{ padding: '14px 18px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  CATEGORY
                </th>
                <th style={{ padding: '14px 18px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  STATUS
                </th>
                <th style={{ padding: '14px 18px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  PRIMARY STACK
                </th>
                <th style={{ padding: '14px 18px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textAlign: 'right' }}>
                  VERIFIED LINKS
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map(p => {
                const num = String(projects.findIndex(item => item.id === p.id) + 1).padStart(2, '0');
                return (
                  <tr
                    key={p.id}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      transition: 'background-color var(--duration-fast) var(--ease-standard)'
                    }}
                  >
                    <td style={{ padding: '16px 18px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-cyan)' }}>
                      {num}
                    </td>
                    <td style={{ padding: '16px 18px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: 'var(--text-base)' }}>
                        {p.name}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        {p.tagline}
                      </div>
                    </td>
                    <td style={{ padding: '16px 18px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                      {p.category}
                    </td>
                    <td style={{ padding: '16px 18px' }}>
                      <StatusBadge status={p.status} />
                    </td>
                    <td style={{ padding: '16px 18px' }}>
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        {p.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="font-mono"
                            style={{
                              fontSize: '10px',
                              padding: '2px 6px',
                              backgroundColor: 'var(--surface-raised)',
                              borderRadius: 'var(--radius-sm)',
                              color: 'var(--text-secondary)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '16px 18px', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                        {p.status === 'HOSTED' && p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono"
                            style={{
                              fontSize: '11px',
                              color: 'var(--accent-blue)',
                              textDecoration: 'none',
                              fontWeight: 600
                            }}
                          >
                            LIVE &rarr;
                          </a>
                        )}
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono"
                            style={{
                              fontSize: '11px',
                              color: 'var(--text-secondary)',
                              textDecoration: 'none'
                            }}
                          >
                            REPO &rarr;
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
