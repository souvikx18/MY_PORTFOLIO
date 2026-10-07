import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
}

/**
 * Interactive Full Background Touch & Mouse Reactive Canvas
 * Implements full viewport touch gesture handling, mouse proximity physics,
 * and continuous silky ambient connection lines across the entire page.
 */
export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Pointer state (mouse or touch)
    const pointer = {
      x: -1000,
      y: -1000,
      radius: 180,
      active: false
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Desktop Mouse Hook
    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const handleMouseLeave = () => {
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Mobile / Tablet Touch Hook
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        if (touch) {
          pointer.x = touch.clientX;
          pointer.y = touch.clientY;
          pointer.active = true;
        }
      }
    };

    const handleTouchEnd = () => {
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });

    // Initialize adaptive node count (lightweight, ~40 on mobile, ~65 on desktop)
    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const count = Math.min(Math.floor((width * height) / 22000), 65);

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        nodes.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.5 + 1
        });
      }
    };

    initNodes();

    let isPageVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Render loop
    const render = () => {
      if (isPageVisible) {
        ctx.clearRect(0, 0, width, height);

        // Midnight Tech Palette: graphite geometry, electric blue active nodes, cyan system connections
        const nodeColor = 'rgba(127, 138, 152, 0.22)';
        const activeNodeColor = '#5B8CFF';
        const amberHighlightColor = '#36CFC9';
        const lineBaseColor = '54, 207, 201';

        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i]!;

          // Ambient floating motion
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Touch / Mouse interactive repulsion and attraction
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let isNearPointer = false;

          if (dist < pointer.radius && pointer.active) {
            isNearPointer = true;
            const force = (pointer.radius - dist) / pointer.radius;
            const angle = Math.atan2(dy, dx);
            // Gentle fluid displacement
            node.x -= Math.cos(angle) * force * 3.5;
            node.y -= Math.sin(angle) * force * 3.5;
          }

          // Draw node
          const isAmber = i % 21 === 0;
          ctx.beginPath();
          ctx.arc(node.x, node.y, isNearPointer ? node.radius * 1.8 : node.radius, 0, Math.PI * 2);
          ctx.fillStyle = isNearPointer ? activeNodeColor : isAmber ? amberHighlightColor : nodeColor;
          ctx.fill();

          // Connect nearby nodes
          for (let j = i + 1; j < nodes.length; j++) {
            const other = nodes[j]!;
            const ndx = node.x - other.x;
            const ndy = node.y - other.y;
            const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

            if (nDist < 120) {
              const alpha = (1 - nDist / 120) * (isNearPointer ? 0.28 : 0.08);
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${lineBaseColor}, ${alpha})`;
              ctx.lineWidth = isNearPointer ? 1.2 : 0.7;
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchstart', handleTouchMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block'
      }}
    />
  );
};
