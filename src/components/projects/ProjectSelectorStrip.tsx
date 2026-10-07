import React, { useState } from 'react';
import { Project } from '../../types/portfolio';

interface ProjectSelectorStripProps {
  projects: readonly Project[];
  activeId?: string;
  onSelectProject?: (id: string) => void;
}

export const ProjectSelectorStrip: React.FC<ProjectSelectorStripProps> = ({
  projects,
  activeId,
  onSelectProject
}) => {
  const [internalIndex, setInternalIndex] = useState(0);

  // Sync with activeId prop if provided
  const activeIndex = activeId
    ? Math.max(0, projects.findIndex(p => p.id === activeId))
    : internalIndex;

  const total = projects.length;
  if (total === 0) return null;

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const currentProject = projects[activeIndex]!;
  const prevProject = projects[prevIndex]!;
  const nextProject = projects[nextIndex]!;

  const handleSelect = (idx: number) => {
    setInternalIndex(idx);
    const target = projects[idx];
    if (target) {
      if (onSelectProject) {
        onSelectProject(target.id);
      } else {
        // Smoothly scroll to the full project card below
        const el = document.getElementById(`project-${target.id}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <div
      className="editorial-card"
      style={{
        width: '100%',
        minHeight: '230px',
        maxHeight: '260px',
        padding: '20px clamp(16px, 4vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        background: 'linear-gradient(180deg, var(--surface-raised) 0%, var(--surface) 100%)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        boxShadow: 'var(--env-depth-shadow)',
        marginBottom: '40px',
        overflow: 'hidden'
      }}
    >
      {/* Top Header Bar with Architectural Line (Matching Reference Img 3) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '11px',
            color: 'var(--accent-cyan)',
            letterSpacing: '0.1em',
            fontWeight: 600,
            textTransform: 'uppercase'
          }}
        >
          02 &mdash; SELECTED WORK
        </span>

        <span
          className="font-mono"
          style={{
            fontSize: '11px',
            color: 'var(--text-muted)'
          }}
        >
          PROJECT {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      {/* Center Interactive Minimal Strip (Left / Center / Right) */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '130px',
          overflow: 'hidden'
        }}
      >
        {/* Left Previous Project */}
        <button
          type="button"
          onClick={() => handleSelect(prevIndex)}
          className="strip-side-project"
          style={{
            position: 'absolute',
            left: 'clamp(8px, 4vw, 48px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            maxWidth: 'clamp(110px, 22vw, 200px)',
            opacity: 0.35,
            transition: 'opacity 250ms ease, transform 250ms ease'
          }}
          aria-label={`Previous project: ${prevProject.name}`}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.08em'
            }}
          >
            {String(prevIndex + 1).padStart(2, '0')}
          </span>
          <span
            style={{
              width: '1px',
              height: '8px',
              backgroundColor: 'var(--border)'
            }}
          />
          <span
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              color: 'var(--text-muted)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {prevProject.name}
          </span>
        </button>

        {/* Center Active Project (Prominent, High-Contrast, Vertical Cyan Ticks) */}
        <div
          onClick={() => handleSelect(activeIndex)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            zIndex: 2,
            maxWidth: 'clamp(260px, 48vw, 480px)',
            textAlign: 'center'
          }}
          role="button"
          tabIndex={0}
          aria-label={`Active project: ${currentProject.name}. Click to view details below.`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleSelect(activeIndex);
            }
          }}
        >
          {/* Top Number & Cyan Guide Tick (Reference 3rd img) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span
              className="font-mono"
              style={{
                fontSize: '12px',
                color: 'var(--accent-cyan)',
                fontWeight: 700,
                letterSpacing: '0.08em'
              }}
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span
              style={{
                width: '1px',
                height: '12px',
                backgroundColor: 'var(--accent-cyan)'
              }}
            />
          </div>

          {/* Active Title */}
          <h3
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 1.15,
              letterSpacing: '-0.03em'
            }}
          >
            {currentProject.name}
          </h3>

          {/* Bottom Cyan Guide Tick */}
          <span
            style={{
              width: '1px',
              height: '10px',
              backgroundColor: 'var(--accent-cyan)',
              marginTop: '2px'
            }}
          />
        </div>

        {/* Right Next Project */}
        <button
          type="button"
          onClick={() => handleSelect(nextIndex)}
          className="strip-side-project"
          style={{
            position: 'absolute',
            right: 'clamp(8px, 4vw, 48px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            maxWidth: 'clamp(110px, 22vw, 200px)',
            opacity: 0.35,
            transition: 'opacity 250ms ease, transform 250ms ease'
          }}
          aria-label={`Next project: ${nextProject.name}`}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.08em'
            }}
          >
            {String(nextIndex + 1).padStart(2, '0')}
          </span>
          <span
            style={{
              width: '1px',
              height: '8px',
              backgroundColor: 'var(--border)'
            }}
          />
          <span
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
              color: 'var(--text-muted)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {nextProject.name}
          </span>
        </button>
      </div>

      {/* Bottom Navigation Indicators & Jump to Details Hint */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '8px',
          borderTop: '1px solid var(--border-subtle)'
        }}
      >
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {projects.map((p, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => handleSelect(idx)}
                aria-label={`Jump to project ${p.name}`}
                style={{
                  width: isActive ? '18px' : '6px',
                  height: '3px',
                  borderRadius: '2px',
                  backgroundColor: isActive ? 'var(--accent-cyan)' : 'var(--border)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
                }}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => handleSelect(activeIndex)}
          className="font-mono"
          style={{
            fontSize: '10px',
            color: 'var(--text-muted)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <span>VIEW FULL DETAILS</span>
          <span style={{ color: 'var(--accent-cyan)' }}>&darr;</span>
        </button>
      </div>

      <style>{`
        .strip-side-project:hover {
          opacity: 0.8 !important;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
