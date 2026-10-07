import React, { useRef, useState, useEffect } from 'react';

export interface ProjectItem {
  readonly number: string;
  readonly title: string;
}

export const defaultProjects: readonly ProjectItem[] = [
  { number: '01', title: 'DecisionOS' },
  { number: '02', title: 'MATEX' },
  { number: '03', title: 'Veridyn' },
  { number: '04', title: 'Flash Flood Prediction System' },
  { number: '05', title: 'HireIQ' },
  { number: '06', title: 'JARVIS' },
];

interface ScrollProjectTransitionProps {
  projects?: readonly ProjectItem[];
}

export const ScrollProjectTransition: React.FC<ScrollProjectTransitionProps> = ({
  projects = defaultProjects
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [virtualIndex, setVirtualIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  // Resize listener
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reduced motion preference
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  // Scroll listener for sticky progress
  useEffect(() => {
    let animationFrameId: number;

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScrollable));
      const targetIndex = progress * (projects.length - 1);
      setVirtualIndex(targetIndex);
    };

    const handleScrollThrottled = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(onScroll);
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, [projects.length]);

  // Click on a project to smoothly scroll directly to it
  const scrollToProject = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = containerTop + (index / (projects.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  // Safe horizontal spacing between project centers
  const horizontalSpacing = Math.min(Math.max(viewportWidth * 0.36, 280), 520);

  return (
    <div
      ref={containerRef}
      id="work"
      style={{
        position: 'relative',
        height: '420vh',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      {/* Sticky Fullscreen Stage */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingTop: 'calc(var(--header-height) + 16px)',
          paddingBottom: '36px',
          boxSizing: 'border-box',
          userSelect: 'none'
        }}
      >
        {/* Section Header with full-width subtle architectural line (Reference 4th img) */}
        <div style={{ width: '100%', paddingInline: 'clamp(20px, 5vw, 64px)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              paddingBottom: '14px',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: 'var(--accent-cyan)',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              02 &mdash; SELECTED WORK
            </span>
          </div>
        </div>

        {/* Center Presentation Stage: Projects moving RIGHT → CENTER → LEFT */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {projects.map((proj, idx) => {
            // Calculate shortest circular difference on 6-project ring
            let diff = idx - virtualIndex;
            while (diff < -3) diff += 6;
            while (diff > 3) diff -= 6;

            const absDiff = Math.abs(diff);
            const isVisible = absDiff <= 1.45;
            const isCenter = absDiff < 0.35;

            // Positioning & Styling transforms
            const translateX = reducedMotion ? 0 : diff * horizontalSpacing;
            const scale = reducedMotion
              ? isCenter ? 1 : 0.65
              : Math.max(0.62, 1 - absDiff * 0.35);
            const opacity = reducedMotion
              ? isCenter ? 1 : 0.25
              : Math.max(0, 1 - absDiff * 0.65);

            if (!isVisible && !reducedMotion) return null;

            return (
              <div
                key={proj.number}
                onClick={() => scrollToProject(idx)}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  transition: reducedMotion
                    ? 'all 300ms ease'
                    : 'none',
                  cursor: isCenter ? 'default' : 'pointer',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  width: 'max-content',
                  maxWidth: 'clamp(280px, 45vw, 560px)',
                  willChange: 'transform, opacity',
                  zIndex: isCenter ? 10 : 2
                }}
                aria-current={isCenter ? 'true' : undefined}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    scrollToProject(idx);
                  }
                }}
              >
                {/* Upper Project Number & Vertical Crosshair (Reference 4th img) */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: isCenter ? '14px' : '11px',
                      color: isCenter ? 'var(--accent-cyan)' : 'var(--text-dim)',
                      fontWeight: isCenter ? 700 : 500,
                      letterSpacing: '0.08em',
                      transition: 'color 200ms ease'
                    }}
                  >
                    {proj.number}
                  </span>
                  {/* Subtle vertical architectural tick */}
                  <span
                    style={{
                      width: '1px',
                      height: isCenter ? '14px' : '8px',
                      backgroundColor: isCenter ? 'var(--accent-cyan)' : 'var(--border)',
                      transition: 'height 200ms ease, background-color 200ms ease'
                    }}
                  />
                </div>

                {/* Project Name (The primary visual element) */}
                <h3
                  style={{
                    fontSize: isCenter
                      ? 'clamp(2rem, 5.2vw, 4.4rem)'
                      : 'clamp(1.2rem, 2.8vw, 2.4rem)',
                    fontWeight: isCenter ? 700 : 500,
                    color: isCenter ? '#F5F7FA' : 'var(--text-muted)',
                    margin: 0,
                    lineHeight: 1.15,
                    letterSpacing: isCenter ? '-0.035em' : '-0.02em',
                    transition: 'color 200ms ease',
                    whiteSpace: 'normal',
                    wordBreak: 'keep-all'
                  }}
                >
                  {proj.title}
                </h3>

                {/* Lower subtle guide tick for center project */}
                {isCenter && (
                  <span
                    style={{
                      width: '1px',
                      height: '14px',
                      backgroundColor: 'var(--accent-cyan)',
                      marginTop: '4px'
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Minimal Scroll Hint & Stepper (Reference 4th img) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: '10px',
              color: 'var(--text-dim)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase'
            }}
          >
            SCROLL TO EXPLORE &bull; {String(Math.round(virtualIndex) + 1).padStart(2, '0')} / 06
          </span>
          <div
            style={{
              display: 'flex',
              gap: '6px',
              alignItems: 'center'
            }}
          >
            {projects.map((p, pIdx) => {
              const active = Math.round(virtualIndex) === pIdx;
              return (
                <button
                  key={p.number}
                  type="button"
                  onClick={() => scrollToProject(pIdx)}
                  aria-label={`Jump to project ${p.number} ${p.title}`}
                  style={{
                    width: active ? '20px' : '6px',
                    height: '2px',
                    borderRadius: '1px',
                    backgroundColor: active ? 'var(--accent-cyan)' : 'var(--border)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 240ms cubic-bezier(0.2, 0.8, 0.2, 1)'
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
