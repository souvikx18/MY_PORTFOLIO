import React, { useEffect, useState } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export const TapRipple: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let rippleCount = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      // Support both touch and mouse coords
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0]!.clientX;
        clientY = e.touches[0]!.clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (clientX === 0 && clientY === 0) return;

      const newRipple: Ripple = {
        id: ++rippleCount,
        x: clientX,
        y: clientY
      };

      setRipples((prev) => [...prev.slice(-8), newRipple]);

      // Remove after animation completes (600ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  if (ripples.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99998,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="tap-ripple-effect"
          style={{
            position: 'absolute',
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
        />
      ))}
      <style>{`
        .tap-ripple-effect {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1.5px solid var(--accent-cyan);
          background: radial-gradient(circle, rgba(54, 207, 201, 0.35) 0%, rgba(54, 207, 201, 0.05) 60%, transparent 80%);
          box-shadow: 0 0 16px rgba(54, 207, 201, 0.5);
          animation: tapRippleAnim 550ms cubic-bezier(0.1, 0.8, 0.2, 1) forwards;
        }

        @keyframes tapRippleAnim {
          0% {
            width: 8px;
            height: 8px;
            opacity: 1;
            transform: translate(-50%, -50%) scale(0.6);
          }
          50% {
            opacity: 0.85;
          }
          100% {
            width: 80px;
            height: 80px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};
