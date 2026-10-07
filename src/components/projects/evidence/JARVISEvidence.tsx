import React, { useState } from 'react';

export const JARVISEvidence: React.FC = () => {
  const [selectedIntent, setSelectedIntent] = useState<number>(0);

  const intents = [
    { voiceCommand: '"Launch local server"', intent: 'SUBPROCESS_SPAWN', target: 'npm run dev' },
    { voiceCommand: '"Check system metrics"', intent: 'OS_TELEMETRY_QUERY', target: 'psutil.cpu_percent()' },
    { voiceCommand: '"Create backup branch"', intent: 'VCS_COMMAND_ROUTER', target: 'git checkout -b' }
  ];

  const current = intents[selectedIntent] || intents[0]!;

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
          VOICE INTENT ROUTER PIPELINE
        </span>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          PYTHON DESKTOP AUTOMATION
        </span>
      </div>

      {/* Voice Command Selector */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {intents.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedIntent(idx)}
            className="font-mono"
            style={{
              flex: 1,
              padding: '6px 8px',
              fontSize: '10px',
              border: '1px solid',
              borderColor: selectedIntent === idx ? 'var(--accent-blue)' : 'var(--border)',
              backgroundColor: selectedIntent === idx ? 'var(--accent-blue)' : 'var(--surface-raised)',
              color: selectedIntent === idx ? '#FFFFFF' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) var(--ease-standard)'
            }}
          >
            {item.voiceCommand}
          </button>
        ))}
      </div>

      {/* Intent Execution Telemetry */}
      <div
        className="font-mono"
        style={{
          padding: '16px',
          backgroundColor: '#070A0F',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '11px',
          lineHeight: '1.7'
        }}
      >
        <p style={{ margin: 0, color: 'var(--accent-cyan)' }}>
          &gt; AUDIO INPUT: {current.voiceCommand}
        </p>
        <p style={{ margin: '4px 0', color: 'var(--text-primary)' }}>
          &gt; PARSED INTENT: {current.intent}
        </p>
        <p style={{ margin: 0, color: 'var(--status-hosted-text)', fontWeight: 650 }}>
          &gt; EXECUTION CALL: {current.target}
        </p>
      </div>

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
        <span>STATUS: IN ACTIVE DEVELOPMENT</span>
        <span>GITHUB REPO LINKED</span>
      </div>
    </div>
  );
};
