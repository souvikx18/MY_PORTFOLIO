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

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      // Support touch or click
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

      const newDrop: WaterDrop = {
        id: ++dropCount,
        x: clientX,
        y: clientY
      };

      setDrops((prev) => [...prev.slice(-10), newDrop]);

      // Remove after fluid animation completes (1000ms)
      setTimeout(() => {
        setDrops((prev) => prev.filter((d) => d.id !== newDrop.id));
      }, 1050);
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  if (drops.length === 0) return null;

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
          {/* Primary wide outer ripple wave */}
          <span className="water-wave water-wave--1" />
          {/* Secondary middle ripple wave */}
          <span className="water-wave water-wave--2" />
          {/* Tertiary inner ripple wave */}
          <span className="water-wave water-wave--3" />
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
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 12px 2px rgba(54, 207, 201, 0.9), 0 0 20px 6px rgba(91, 140, 255, 0.5);
          transform: translate(-50%, -50%);
          animation: dropImpactAnim 400ms cubic-bezier(0.1, 0.9, 0.2, 1) forwards;
        }

        /* Fluid expanding concentric liquid ripple rings */
        .water-wave {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(54, 207, 201, 0.7);
          background: radial-gradient(circle, rgba(54, 207, 201, 0.12) 0%, rgba(54, 207, 201, 0.03) 60%, transparent 80%);
          transform: translate(-50%, -50%);
          box-sizing: border-box;
        }

        .water-wave--1 {
          animation: waveExpand1 950ms cubic-bezier(0.12, 0.75, 0.2, 1) forwards;
        }

        .water-wave--2 {
          animation: waveExpand2 950ms cubic-bezier(0.12, 0.75, 0.2, 1) 100ms forwards;
        }

        .water-wave--3 {
          animation: waveExpand3 950ms cubic-bezier(0.12, 0.75, 0.2, 1) 220ms forwards;
        }

        @keyframes dropImpactAnim {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.4);
            opacity: 0;
          }
        }

        @keyframes waveExpand1 {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.95;
            border-width: 2px;
          }
          40% {
            opacity: 0.7;
            border-color: rgba(54, 207, 201, 0.6);
          }
          100% {
            width: 260px;
            height: 260px;
            opacity: 0;
            border-width: 0.8px;
            border-color: rgba(54, 207, 201, 0.1);
          }
        }

        @keyframes waveExpand2 {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.85;
            border-width: 1.8px;
          }
          40% {
            opacity: 0.6;
            border-color: rgba(54, 207, 201, 0.5);
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
            border-width: 0.8px;
            border-color: rgba(54, 207, 201, 0.05);
          }
        }

        @keyframes waveExpand3 {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.75;
            border-width: 1.5px;
          }
          40% {
            opacity: 0.5;
            border-color: rgba(54, 207, 201, 0.4);
          }
          100% {
            width: 140px;
            height: 140px;
            opacity: 0;
            border-width: 0.8px;
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};
