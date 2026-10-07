import React, { useEffect, useState } from 'react';

interface WaterDrop {
  id: number;
  x: number;
  y: number;
}

export const TapRipple: React.FC = () => {
  const [drops, setDrops] = useState<WaterDrop[]>([]);

  useEffect(() => {
    let dropCount = 0;
    let lastTime = 0;

    const triggerDrop = (clientX: number, clientY: number) => {
      const now = performance.now();
      // Prevent duplicate triggers if pointerdown + touchstart + mousedown occur together
      if (now - lastTime < 50) return;
      lastTime = now;

      if (clientX === 0 && clientY === 0) return;

      const newDrop: WaterDrop = {
        id: ++dropCount,
        x: clientX,
        y: clientY
      };

      setDrops((prev) => [...prev.slice(-8), newDrop]);

      // Auto clean after 700ms
      setTimeout(() => {
        setDrops((prev) => prev.filter((d) => d.id !== newDrop.id));
      }, 700);
    };

    const handlePointerDown = (e: PointerEvent) => {
      triggerDrop(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        triggerDrop(e.touches[0]!.clientX, e.touches[0]!.clientY);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      triggerDrop(e.clientX, e.clientY);
    };

    // Use capturing phase ({ capture: true }) so taps on buttons, cards, links,
    // and interactive content ALWAYS register and trigger the water drop animation!
    window.addEventListener('pointerdown', handlePointerDown, { capture: true, passive: true });
    window.addEventListener('touchstart', handleTouchStart, { capture: true, passive: true });
    window.addEventListener('mousedown', handleMouseDown, { capture: true, passive: true });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown, { capture: true });
      window.removeEventListener('touchstart', handleTouchStart, { capture: true });
      window.removeEventListener('mousedown', handleMouseDown, { capture: true });
    };
  }, []);

  if (drops.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="water-drop-container"
          style={{
            position: 'absolute',
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
        >
          {/* Central droplet impact */}
          <span className="water-drop-center" />
          {/* Primary medium ripple wave (max 125px) */}
          <span className="water-wave water-wave--primary" />
          {/* Secondary inner ripple wave (max 85px) */}
          <span className="water-wave water-wave--secondary" />
        </div>
      ))}
      <style>{`
        .water-drop-container {
          width: 0;
          height: 0;
        }

        /* Central droplet splash glow */
        .water-drop-center {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 10px 2px rgba(54, 207, 201, 0.9);
          transform: translate(-50%, -50%);
          animation: dropImpactAnim 350ms cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
        }

        /* Medium fluid expanding liquid ripples */
        .water-wave {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(54, 207, 201, 0.75);
          background: radial-gradient(circle, rgba(54, 207, 201, 0.12) 0%, rgba(54, 207, 201, 0.02) 65%, transparent 80%);
          transform: translate(-50%, -50%);
          box-sizing: border-box;
        }

        .water-wave--primary {
          animation: waveExpandMedium1 650ms cubic-bezier(0.15, 0.8, 0.25, 1) forwards;
        }

        .water-wave--secondary {
          animation: waveExpandMedium2 650ms cubic-bezier(0.15, 0.8, 0.25, 1) 70ms forwards;
        }

        @keyframes dropImpactAnim {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0.85;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes waveExpandMedium1 {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.95;
            border-width: 1.8px;
          }
          45% {
            opacity: 0.75;
            border-color: rgba(54, 207, 201, 0.65);
          }
          100% {
            width: 125px;
            height: 125px;
            opacity: 0;
            border-width: 0.8px;
            border-color: rgba(54, 207, 201, 0.1);
          }
        }

        @keyframes waveExpandMedium2 {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.85;
            border-width: 1.5px;
          }
          45% {
            opacity: 0.6;
            border-color: rgba(54, 207, 201, 0.5);
          }
          100% {
            width: 85px;
            height: 85px;
            opacity: 0;
            border-width: 0.8px;
            border-color: rgba(54, 207, 201, 0.05);
          }
        }
      `}</style>
    </div>
  );
};
