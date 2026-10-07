import React, { useState } from 'react';

export const VeridynEvidence: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const scenarios = [
    {
      id: 'TEST_01_GROUNDING',
      target: 'RAG Context Fidelity',
      metric: 'Factual Alignment: 98.4%',
      status: 'VERIFIED GROUNDED',
      code: 'assert_context_grounding(response, retrieved_chunks, threshold=0.95)'
    },
    {
      id: 'TEST_02_TOOL_CALL',
      target: 'Tool Invocation Boundary',
      metric: 'Schema Validation: 100%',
      status: 'ZERO FAULT EXECUTION',
      code: 'validate_tool_schema(agent_action, strict=True)'
    },
    {
      id: 'TEST_03_INJECTION',
      target: 'Adversarial Prompt Resistance',
      metric: 'Safety Boundary: 100%',
      status: 'OVERRIDE NEUTRALIZED',
      code: 'detect_prompt_override(raw_user_input, sandbox=True)'
    }
  ];

  const current = scenarios[activeScenario] || scenarios[0]!;

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
          ASYNC EVALUATION PIPELINE SCHEMATIC
        </span>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          FASTAPI &bull; PYTHON ENGINE
        </span>
      </div>

      {/* Pipeline Stages Flow */}
      <div
        className="font-mono"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px',
          fontSize: '10px',
          textAlign: 'center'
        }}
      >
        <div style={{ padding: '8px', backgroundColor: 'var(--surface-raised)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
          01 INGEST
        </div>
        <div style={{ padding: '8px', backgroundColor: 'var(--surface-raised)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
          02 INVOKE
        </div>
        <div style={{ padding: '8px', backgroundColor: 'var(--surface-raised)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}>
          03 TELEMETRY
        </div>
        <div style={{ padding: '8px', backgroundColor: 'var(--accent-cyan-subtle)', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', borderRadius: 'var(--radius-sm)' }}>
          04 VERIFY
        </div>
      </div>

      {/* Scenario Selector */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {scenarios.map((sc, idx) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => setActiveScenario(idx)}
            className="font-mono"
            style={{
              flex: 1,
              padding: '6px 8px',
              fontSize: '10px',
              border: '1px solid',
              borderColor: activeScenario === idx ? 'var(--accent-blue)' : 'var(--border)',
              backgroundColor: activeScenario === idx ? 'var(--accent-blue)' : 'var(--surface-raised)',
              color: activeScenario === idx ? '#FFFFFF' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) var(--ease-standard)'
            }}
          >
            {sc.id}
          </button>
        ))}
      </div>

      {/* Telemetry Log Terminal Display */}
      <div
        className="font-mono"
        style={{
          padding: '14px',
          backgroundColor: '#070A0F',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '11px',
          lineHeight: '1.6'
        }}
      >
        <p style={{ margin: 0, color: 'var(--accent-cyan)' }}>
          &gt; TARGET: {current.target}
        </p>
        <p style={{ margin: '4px 0', color: 'var(--text-primary)' }}>
          &gt; TEST CODE: {current.code}
        </p>
        <p style={{ margin: 0, color: 'var(--status-hosted-text)', fontWeight: 650 }}>
          &gt; OUTCOME: {current.status} ({current.metric})
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
