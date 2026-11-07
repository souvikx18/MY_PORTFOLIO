import React from 'react';
import { Project } from '../../types/portfolio';

interface ProjectSelectorStripProps {
  projects: readonly Project[];
  activeId?: string;
  onSelectProject?: (id: string) => void;
}

export const ProjectSelectorStrip: React.FC<ProjectSelectorStripProps> = ({
  projects,
  onSelectProject
}) => {
  const total = projects.length;
  if (total === 0) return null;

  // Quadruple the project list so the continuous marquee repeats seamlessly on all screens
  const marqueeItems = [...projects, ...projects, ...projects, ...projects];

  const handleProjectClick = (projectId: string) => {
    if (onSelectProject) {
      onSelectProject(projectId);
    }
    const el = document.getElementById(`project-${projectId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      style={{
        width: '100%',
        marginBottom: '56px',
        overflow: 'hidden'
      }}
      aria-label="Continuous Reel of Selected Works"
    >
      {/* Minimal Header Line */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '8px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '24px'
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0 }}
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 12 12 17 22 12" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
        <span
          className="font-mono"
          style={{
            fontSize: '13px',
            color: '#38BDF8',
            letterSpacing: '0.12em',
            fontWeight: 700,
            textTransform: 'uppercase'
          }}
        >
          PROJECTS
        </span>
      </div>

      {/* Borderless, Continuous Horizontal Ticker (Casko Luxury Typography & Generous Gap) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          paddingBlock: '16px',
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
        }}
      >
        <div className="continuous-projects-track">
          {marqueeItems.map((proj, idx) => (
            <React.Fragment key={`${proj.id}-${idx}`}>
              <button
                type="button"
                onClick={() => handleProjectClick(proj.id)}
                className="reel-project-item"
                aria-label={`Project: ${proj.name}. Click to view details below.`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  padding: '6px 12px',
                  color: 'inherit',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 240ms ease',
                  textDecoration: 'none'
                }}
              >
                {/* Project Title Styled with Casko Luxury Serif Typography */}
                <span
                  className="project-name-luxury"
                  style={{
                    fontFamily: 'var(--font-luxury), "Casko Luxury", "Casko", "Playfair Display", "Cormorant Garamond", Didot, "Bodoni MT", serif',
                    fontSize: 'clamp(22px, 2.6vw, 30px)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    letterSpacing: '0.03em',
                    lineHeight: 1.2,
                    transition: 'color 220ms ease, text-shadow 220ms ease, transform 220ms ease'
                  }}
                >
                  {proj.name}
                </span>
              </button>

              {/* Elegant Separator Diamond with Generous Spacing */}
              <span
                style={{
                  color: 'var(--accent-cyan)',
                  fontSize: '11px',
                  opacity: 0.6,
                  alignSelf: 'center',
                  flexShrink: 0
                }}
                aria-hidden="true"
              >
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Infinite Continuous Scrolling Animation with Expanded Gap and Smooth Timing */}
      <style>{`
        .continuous-projects-track {
          display: flex;
          align-items: center;
          gap: clamp(48px, 6vw, 76px);
          width: max-content;
          will-change: transform;
          animation: seamlessContinuousScroll 40s linear infinite;
        }

        @keyframes seamlessContinuousScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .reel-project-item:hover .project-name-luxury {
          color: var(--accent-cyan) !important;
          text-shadow: 0 0 20px rgba(54, 207, 201, 0.45);
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .continuous-projects-track {
            animation-duration: 28s;
            gap: 36px;
          }
        }
      `}</style>
    </div>
  );
};
