import React, { useState } from 'react';
import { Project } from '../../types/portfolio';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';

interface ProjectRowProps {
  project: Project;
  index: number;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const formattedIndex = String(index + 1).padStart(2, '0');
  const detailsId = `case-study-${project.id}`;

  return (
    <article
      className="interactive-row"
      style={{
        padding: '32px 28px',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--surface)',
        borderRadius: 'var(--radius-sm)'
      }}
    >
      {/* Top Header: Index, Title, Status, and Action Links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline', flexWrap: 'wrap' }}>
          <span
            className="font-mono"
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--accent-bronze)',
              fontWeight: 500
            }}
            aria-hidden="true"
          >
            {formattedIndex}
          </span>
          <h3 style={{ fontSize: 'var(--text-3xl)', margin: 0, fontWeight: 650 }}>
            {project.name}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live deployment of ${project.name} (opens in new tab)`}
              style={{ minHeight: '38px', padding: '0 16px', fontSize: 'var(--text-xs)' }}
            >
              Live Deployment &nearr;
            </Button>
          )}

          <Button
            href={project.githubUrl}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} GitHub repository (opens in new tab)`}
            style={{ minHeight: '38px', padding: '0 16px', fontSize: 'var(--text-xs)' }}
          >
            GitHub &nearr;
          </Button>

          <button
            type="button"
            onClick={() => setExpanded(prev => !prev)}
            className="btn-secondary"
            aria-expanded={expanded}
            aria-controls={detailsId}
            style={{
              minHeight: '38px',
              padding: '0 14px',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wide)'
            }}
          >
            {expanded ? 'LESS DETAILS &uarr;' : 'CASE STUDY &darr;'}
          </button>
        </div>
      </div>

      {/* Tagline & Primary Description */}
      <p
        style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--text-primary)',
          lineHeight: 'var(--leading-snug)',
          marginBottom: '12px',
          fontWeight: 500
        }}
      >
        {project.tagline}
      </p>

      <p
        style={{
          fontSize: 'var(--text-base)',
          color: 'var(--text-secondary)',
          lineHeight: 'var(--leading-normal)',
          marginBottom: '24px',
          maxWidth: '920px'
        }}
      >
        {project.description}
      </p>

      {/* Two-Column Problem & Architecture Overview */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-subtle)',
          marginBottom: '20px'
        }}
      >
        <div>
          <p
            className="font-mono"
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--accent-bronze)',
              marginBottom: '6px'
            }}
          >
            ROLE & CONTEXT
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>
            <strong>{project.role}</strong> &bull; {project.category}
          </p>
        </div>

        <div>
          <p
            className="font-mono"
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--accent-bronze)',
              marginBottom: '6px'
            }}
          >
            SYSTEM ARCHITECTURE
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>
            {project.architectureOverview}
          </p>
        </div>
      </div>

      {/* Expandable Technical Case Study Disclosure */}
      {expanded && (
        <div
          id={detailsId}
          style={{
            marginTop: '20px',
            padding: '24px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)'
          }}
        >
          <p
            className="font-mono"
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--accent-bronze)',
              marginBottom: '12px'
            }}
          >
            TECHNICAL IMPLEMENTATION EVIDENCE & DECISIONS
          </p>

          <ul
            style={{
              margin: '0 0 16px 0',
              paddingLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            {project.engineeringFocus.map((focusItem, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)'
                }}
              >
                {focusItem}
              </li>
            ))}
          </ul>

          {project.isPendingDetails && (
            <p
              className="font-mono"
              style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--text-muted)',
                margin: 0,
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '12px'
              }}
            >
              &bull; Additional architectural diagrams, screenshots, and benchmarks pending completion of development.
            </p>
          )}
        </div>
      )}

      {/* Technology Tags */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}
      >
        <span
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginRight: '4px' }}
        >
          STACK:
        </span>
        {project.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="font-mono"
            style={{
              fontSize: 'var(--text-xs)',
              padding: '3px 8px',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-primary)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};
