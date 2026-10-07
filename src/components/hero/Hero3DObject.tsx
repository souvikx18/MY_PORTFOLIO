import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

/**
 * Hero3DObject: Interactive 3D Computational Polyhedron
 * Implements real 3D perspective projection, interactive pointer rotation,
 * and dual-ring architectural wireframe structure with zero external 3D libraries.
 */
export const Hero3DObject: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 320;
    let height = 320;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.min(rect.width, 340);
      height = width;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener('resize', updateSize, { passive: true });

    // 3D Geometry: Icosahedron / Geodesic Vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },
      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },
      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 }
    ];

    // Scale vertices
    const radius = 95;
    const vertices = rawVertices.map(v => {
      const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
      return {
        x: (v.x / len) * radius,
        y: (v.y / len) * radius,
        z: (v.z / len) * radius
      };
    });

    // Wireframe edge connectivity
    const edges: [number, number][] = [
      [0, 1], [0, 5], [0, 7], [0, 10], [0, 11],
      [1, 5], [1, 7], [1, 8], [1, 9],
      [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
      [3, 4], [3, 6], [3, 8], [3, 9],
      [4, 5], [4, 9], [4, 11],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 8], [7, 10],
      [8, 9], [10, 11]
    ];

    let rotX = 0.4;
    let rotY = 0.6;
    let rotZ = 0.2;
    let targetRotSpeedX = 0.007;
    let targetRotSpeedY = 0.011;

    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        rotY += deltaX * 0.012;
        rotX += deltaY * 0.012;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support for 3D rotation
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        setIsInteracting(true);
        lastMouseX = e.touches[0]!.clientX;
        lastMouseY = e.touches[0]!.clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const deltaX = e.touches[0]!.clientX - lastMouseX;
        const deltaY = e.touches[0]!.clientY - lastMouseY;
        rotY += deltaX * 0.015;
        rotX += deltaY * 0.015;
        lastMouseX = e.touches[0]!.clientX;
        lastMouseY = e.touches[0]!.clientY;
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    let isVisible = true;
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        isVisible = entry ? entry.isIntersecting : true;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const render = () => {
      if (isVisible) {
        if (!isDragging) {
          rotX += targetRotSpeedX;
          rotY += targetRotSpeedY;
          rotZ += 0.003;
        }

        ctx.clearRect(0, 0, width, height);

        // Midnight Tech 3D Rendering: graphite geometry, electric blue active nodes, cyan connections, limited amber
        const edgeColor = 'rgba(54, 207, 201, 0.38)';
        const vertexColor = '#B8C1CC';
        const activeNode = '#5B8CFF';
        const amberNode = '#36CFC9';

        const cx = width / 2;
        const cy = height / 2;
        const fov = 380;

        // 3D rotation transform matrices
        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
        const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

        const projected = vertices.map(v => {
          // Rotate Y
          let x1 = v.x * cosY + v.z * sinY;
          let y1 = v.y;
          let z1 = -v.x * sinY + v.z * cosY;

          // Rotate X
          let x2 = x1;
          let y2 = y1 * cosX - z1 * sinX;
          let z2 = y1 * sinX + z1 * cosX;

          // Rotate Z
          let x3 = x2 * cosZ - y2 * sinZ;
          let y3 = x2 * sinZ + y2 * cosZ;
          let z3 = z2;

          // Perspective Projection
          const scale = fov / (fov + z3 + 120);
          return {
            x: cx + x3 * scale,
            y: cy + y3 * scale,
            z: z3,
            scale
          };
        });

        // Draw Central Core Node (Electric Blue System Heart)
        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(91, 140, 255, 0.12)';
        ctx.fill();
        ctx.strokeStyle = '#5B8CFF';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw 3D Edges (Cyan System Connections)
        ctx.beginPath();
        ctx.strokeStyle = edgeColor;
        ctx.lineWidth = 1.2;

        for (const [i, j] of edges) {
          const p1 = projected[i]!;
          const p2 = projected[j]!;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
        }
        ctx.stroke();

        // Draw 3D Vertices with Depth Scaling
        for (let i = 0; i < projected.length; i++) {
          const p = projected[i]!;
          const nodeRadius = Math.max(2, 3.5 * p.scale);

          ctx.beginPath();
          ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
          const isAmber = i === 0 || i === 7;
          const isActive = i % 3 === 0;
          ctx.fillStyle = isAmber ? amberNode : isActive ? activeNode : vertexColor;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateSize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '340px',
        aspectRatio: '1',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isInteracting ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      title="Click and drag to rotate the 3D computational structure"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />

      {/* Subtle 3D Telemetry Indicator */}
      <div
        className="font-mono"
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '9px',
          color: 'var(--text-muted)',
          backgroundColor: 'var(--surface)',
          padding: '2px 8px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-subtle)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap'
        }}
      >
        INTERACTIVE 3D &bull; DRAG TO ROTATE
      </div>
    </div>
  );
};
