import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Restrained Technical Geometry Canvas
 * Renders an abstract, hardware-accelerated distributed system coordinate mesh.
 * Pauses automatically when offscreen or in reduced-motion mode.
 * Strictly 0 external libraries, 0ms frame jank on 2GB devices.
 */
export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || prefersReducedMotion) return;

    // Disable dynamic rendering on mobile/small viewports to conserve battery/GPU
    if (window.innerWidth < 768) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Restrained mouse depth tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 14;
      targetMouseY = y * 14;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause rendering when offscreen (Section 09 Performance Rule)
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        isVisible = entry ? entry.isIntersecting : true;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Procedural Isometric Node Grid
    const nodes: { x: number; y: number; z: number; r: number }[] = [];
    const cols = 7;
    const rows = 5;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        nodes.push({
          x: (i - cols / 2) * 64,
          y: (j - rows / 2) * 44,
          z: Math.sin(i * 0.7 + j * 0.5) * 12,
          r: (i + j) % 2 === 0 ? 2.5 : 1.5
        });
      }
    }

    let time = 0;

    const render = () => {
      if (isVisible) {
        time += 0.008;
        // Smooth dampening towards mouse target
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        const width = container.clientWidth;
        const height = container.clientHeight;
        ctx.clearRect(0, 0, width, height);

        // Midnight Tech Palette
        const strokeColor = 'rgba(54, 207, 201, 0.16)';
        const nodeColor = 'rgba(184, 193, 204, 0.35)';
        const accentNodeColor = '#5B8CFF';
        const amberNodeColor = '#D6A85F';

        const originX = width * 0.72 + mouseX;
        const originY = height * 0.48 + mouseY;

        // Render Connections
        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1;

        for (let i = 0; i < nodes.length; i++) {
          const n1 = nodes[i];
          if (!n1) continue;

          const px1 = originX + n1.x + Math.sin(time + n1.y * 0.02) * 4;
          const py1 = originY + n1.y + n1.z + Math.cos(time + n1.x * 0.02) * 4;

          // Connect adjacent nodes
          if ((i + 1) % cols !== 0 && nodes[i + 1]) {
            const n2 = nodes[i + 1];
            if (n2) {
              const px2 = originX + n2.x + Math.sin(time + n2.y * 0.02) * 4;
              const py2 = originY + n2.y + n2.z + Math.cos(time + n2.x * 0.02) * 4;
              ctx.moveTo(px1, py1);
              ctx.lineTo(px2, py2);
            }
          }

          if (i + cols < nodes.length && nodes[i + cols]) {
            const n3 = nodes[i + cols];
            if (n3) {
              const px3 = originX + n3.x + Math.sin(time + n3.y * 0.02) * 4;
              const py3 = originY + n3.y + n3.z + Math.cos(time + n3.x * 0.02) * 4;
              ctx.moveTo(px1, py1);
              ctx.lineTo(px3, py3);
            }
          }
        }
        ctx.stroke();

        // Render Nodes
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          if (!n) continue;

          const px = originX + n.x + Math.sin(time + n.y * 0.02) * 4;
          const py = originY + n.y + n.z + Math.cos(time + n.x * 0.02) * 4;

          ctx.beginPath();
          ctx.arc(px, py, n.r, 0, Math.PI * 2);
          ctx.fillStyle = i === 12 ? amberNodeColor : i === 22 || i === 8 ? accentNodeColor : nodeColor;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
};
