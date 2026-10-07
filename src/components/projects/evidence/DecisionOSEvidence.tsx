import React, { useState } from 'react';

export const DecisionOSEvidence: React.FC = () => {
  const [speedWeight, setSpeedWeight] = useState(35);
  const [securityWeight, setSecurityWeight] = useState(40);
  const [scaleWeight, setScaleWeight] = useState(25);

  // Deterministic trade-off composite score
  const compositeScore = (
    (speedWeight * 0.92 + securityWeight * 0.98 + scaleWeight * 0.86) /
    (speedWeight + securityWeight + scaleWeight) *
    100
  ).toFixed(1);

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
          LIVE STATE ENGINE ARTIFACT
        </span>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          DETERMINISTIC MATRIX MODEL
        </span>
      </div>

      {/* Interactive Weight Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: '4px' }}>
            <span>Execution Speed Factor</span>
            <span className="font-mono">{speedWeight}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            value={speedWeight}
            onChange={e => setSpeedWeight(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-blue)' }}
            aria-label="Execution Speed Factor Weight"
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: '4px' }}>
            <span>Security Boundary Factor</span>
            <span className="font-mono">{securityWeight}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            value={securityWeight}
            onChange={e => setSecurityWeight(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-cyan)' }}
            aria-label="Security Boundary Factor Weight"
          />
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: '4px' }}>
            <span>Scalability Factor</span>
            <span className="font-mono">{scaleWeight}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="60"
            value={scaleWeight}
            onChange={e => setScaleWeight(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--accent-blue)' }}
            aria-label="Scalability Factor Weight"
          />
        </div>
      </div>

      {/* Real-time Computed Evaluation Output */}
      <div
        style={{
          padding: '16px',
          border: '1px solid var(--border)',
          backgroundColor: 'var(--surface-raised)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <p className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', margin: 0 }}>
            COMPUTED MATRIX SCORE
          </p>
          <p style={{ fontSize: 'var(--text-xl)', fontWeight: 650, color: 'var(--accent-blue)', margin: '4px 0 0 0' }}>
            {compositeScore} / 100
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span
            className="status-badge status-badge--hosted"
            style={{ fontSize: '10px' }}
          >
            VERCEL DEPLOYED
          </span>
          <p className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
            PERSISTENT WORKFLOW STATE
          </p>
        </div>
      </div>
    </div>
  );
};
