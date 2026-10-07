import React, { useState } from 'react';

export const HireIQEvidence: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'recruiter' | 'student'>('recruiter');

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
          DUAL-ROLE PORTAL ARCHITECTURE
        </span>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          ROLE ISOLATION SCHEMA
        </span>
      </div>

      {/* Role View Toggle */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          type="button"
          onClick={() => setActiveRole('recruiter')}
          className="font-mono"
          style={{
            flex: 1,
            padding: '8px 10px',
            fontSize: '11px',
            border: '1px solid',
            borderColor: activeRole === 'recruiter' ? 'var(--accent-blue)' : 'var(--border)',
            backgroundColor: activeRole === 'recruiter' ? 'var(--accent-blue)' : 'var(--surface-raised)',
            color: activeRole === 'recruiter' ? '#FFFFFF' : 'var(--text-secondary)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            transition: 'all var(--duration-fast) var(--ease-standard)'
          }}
        >
          RECRUITER WORKFLOW
        </button>

        <button
          type="button"
          onClick={() => setActiveRole('student')}
          className="font-mono"
          style={{
            flex: 1,
            padding: '8px 10px',
            fontSize: '11px',
            border: '1px solid',
            borderColor: activeRole === 'student' ? 'var(--accent-blue)' : 'var(--border)',
            backgroundColor: activeRole === 'student' ? 'var(--accent-blue)' : 'var(--surface-raised)',
            color: activeRole === 'student' ? '#FFFFFF' : 'var(--text-secondary)',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            transition: 'all var(--duration-fast) var(--ease-standard)'
          }}
        >
          STUDENT WORKFLOW
        </button>
      </div>

      {/* Workflow Step Pipeline Display */}
      <div
        className="font-mono"
        style={{
          padding: '16px',
          backgroundColor: 'var(--surface-raised)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '11px',
          lineHeight: '1.7'
        }}
      >
        {activeRole === 'recruiter' ? (
          <>
            <p style={{ margin: 0, color: 'var(--accent-cyan)' }}>
              1. CRITERION INGESTION &rarr; Define custom technical evaluation rubrics.
            </p>
            <p style={{ margin: '4px 0', color: 'var(--text-primary)' }}>
              2. BATCH SCANNING &rarr; Parse resume PDFs against keyword & skill matrices.
            </p>
            <p style={{ margin: 0, color: 'var(--status-hosted-text)' }}>
              3. SHORTLIST PIPELINE &rarr; Filter qualified candidates with score metrics.
            </p>
          </>
        ) : (
          <>
            <p style={{ margin: 0, color: 'var(--accent-cyan)' }}>
              1. DOCUMENT SUBMISSION &rarr; Upload PDF resume for automated parsing.
            </p>
            <p style={{ margin: '4px 0', color: 'var(--text-primary)' }}>
              2. BENCHMARK ANALYSIS &rarr; Identify missing skills relative to role requirements.
            </p>
            <p style={{ margin: 0, color: 'var(--status-hosted-text)' }}>
              3. FEEDBACK REPORT &rarr; Review structured improvement indicators.
            </p>
          </>
        )}
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
        <span>STATUS: NOT YET DEPLOYED</span>
        <span>GITHUB REPO LINKED</span>
      </div>
    </div>
  );
};
