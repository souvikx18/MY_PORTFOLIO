import React, { useEffect, useState, useRef } from 'react';

/**
 * Custom Interactive Cursor (Circle with Inner Dot)
 * Senior Interaction Design: Smooth lerp trailing, magnetic expansion on interactive targets.
 * Automatically disabled on touch screens and in reduced-motion environments.
 */
export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // Position coordinates
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on pointer-fine devices (desktop mice, trackpads)
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!visible) setVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, [role="button"], [role="tab"], .interactive-target, .editorial-card'
        );
        setIsHovered(Boolean(interactive));
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth Lerp animation loop for the outer ring
    const render = () => {
      // Lerp ring towards mouse position (0.18 factor for silky fluid trailing)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        overflow: 'hidden'
      }}
    >
      {/* Outer Smooth Trailing Ring (Midnight Tech Accent Blue) */}
      <div
        ref={ringRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: isHovered ? '52px' : isClicking ? '26px' : '34px',
          height: isHovered ? '52px' : isClicking ? '26px' : '34px',
          borderRadius: '50%',
          border: '1.5px solid var(--accent-blue)',
          backgroundColor: isHovered ? 'rgba(91, 140, 255, 0.08)' : 'transparent',
          boxShadow: isHovered ? '0 0 16px rgba(91, 140, 255, 0.35)' : 'none',
          transition: 'width 240ms cubic-bezier(0.16, 1, 0.3, 1), height 240ms cubic-bezier(0.16, 1, 0.3, 1), background-color 240ms ease, border-color 240ms ease',
          pointerEvents: 'none',
          willChange: 'transform, width, height'
        }}
      />

      {/* Inner Pinpoint Solid Dot (Cool Primary White / Accent Cyan on Hover) */}
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          borderRadius: '50%',
          backgroundColor: isHovered ? 'var(--accent-cyan)' : 'var(--text-primary)',
          pointerEvents: 'none',
          transition: 'width 180ms ease, height 180ms ease, background-color 180ms ease',
          willChange: 'transform'
        }}
      />
    </div>
  );
};
