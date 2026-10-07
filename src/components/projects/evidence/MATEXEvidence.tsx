import React, { useState } from 'react';

export const MATEXEvidence: React.FC = () => {
  const [selectedMove, setSelectedMove] = useState<number>(0);

  const moves = [
    { move: '1. e4 e5', state: 'KING PAWN OPENING', evalState: 'BOARD BALANCED' },
    { move: '2. Nf3 Nc6', state: 'KNIGHT DEVELOPMENT', evalState: 'CENTER CONTROLLED' },
    { move: '3. Bc4 Bc5', state: 'ITALIAN GAME STRUCTURE', evalState: 'PIECE MOBILITY OPTIMAL' }
  ];

  const active = moves[selectedMove] || moves[0]!;

  return (
    <div
      className="editorial-card"
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: 'var(--surface)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span
          className="font-mono"
          style={{ fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: 'var(--tracking-wide)' }}
        >
          BOARD STATE MACHINE SCHEMA
        </span>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          REACT LEGAL MOVE ENGINE
        </span>
      </div>

      {/* Interactive Turn Sequence Selector */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {moves.map((m, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedMove(idx)}
            className="font-mono"
            style={{
              flex: 1,
              padding: '8px 10px',
              fontSize: '11px',
              border: '1px solid',
              borderColor: selectedMove === idx ? 'var(--accent-blue)' : 'var(--border)',
              backgroundColor: selectedMove === idx ? 'var(--accent-blue)' : 'var(--surface-raised)',
              color: selectedMove === idx ? '#FFFFFF' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) var(--ease-standard)'
            }}
          >
            {m.move}
          </button>
        ))}
      </div>

      {/* Visual State Telemetry */}
      <div
        style={{
          padding: '16px',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--surface-raised)',
          borderRadius: 'var(--radius-sm)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px'
        }}
      >
        <div>
          <p className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', margin: 0 }}>
            CURRENT STATE PHASE
          </p>
          <p className="font-mono" style={{ fontSize: 'var(--text-sm)', fontWeight: 650, margin: '4px 0 0 0', color: 'var(--text-primary)' }}>
            {active.state}
          </p>
        </div>

        <div>
          <p className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', margin: 0 }}>
            ENGINE VALIDATION
          </p>
          <p className="font-mono" style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-cyan)', fontWeight: 650, margin: '4px 0 0 0' }}>
            &bull; {active.evalState}
          </p>
        </div>
      </div>

      {/* Architectural Guarantee Note */}
      <div
        className="font-mono"
        style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border)',
          paddingTop: '12px'
        }}
      >
        <span>NETLIFY HOSTED</span>
        <span>ZERO FRAME-JANK RE-RENDERS</span>
      </div>
    </div>
  );
};
