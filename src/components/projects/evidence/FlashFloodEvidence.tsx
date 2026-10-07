import React, { useState } from 'react';

export const FlashFloodEvidence: React.FC = () => {
  const [rainfallRate, setRainfallRate] = useState(45); // mm/h

  const riskTier = rainfallRate > 60 ? 'HIGH RISK (DISPATCH ALERT)' : rainfallRate > 35 ? 'MODERATE RISK (MONITORING)' : 'LOW RISK (STABLE)';
  const riskColor = rainfallRate > 60 ? 'var(--status-dev-text)' : 'var(--status-hosted-text)';

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
          HYDROLOGICAL PIPELINE SCHEMA
        </span>
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          PYTHON PREDICTIVE SYSTEM
        </span>
      </div>

      {/* Sensor Ingestion Metric Slider */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', marginBottom: '4px' }}>
          <span>Precipitation Inflow Parameter</span>
          <span className="font-mono">{rainfallRate} mm/hour</span>
        </div>
        <input
          type="range"
          min="10"
          max="90"
          value={rainfallRate}
          onChange={e => setRainfallRate(Number(e.target.value))}
          style={{ width: '100%', accentColor: 'var(--accent-cyan)' }}
          aria-label="Precipitation Inflow Parameter in millimeters per hour"
        />
      </div>

      {/* Threshold Classification Telemetry */}
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
            PIPELINE STATUS
          </p>
          <p className="font-mono" style={{ fontSize: 'var(--text-sm)', fontWeight: 650, margin: '4px 0 0 0', color: 'var(--text-primary)' }}>
            HISTORICAL INGESTION ACTIVE
          </p>
        </div>

        <div>
          <p className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', margin: 0 }}>
            CLASSIFIED HAZARD TIER
          </p>
          <p className="font-mono" style={{ fontSize: 'var(--text-sm)', color: riskColor, fontWeight: 650, margin: '4px 0 0 0' }}>
            &bull; {riskTier}
          </p>
        </div>
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
        <span>PLANNED FOR CONTAINER DEPLOYMENT</span>
      </div>
    </div>
  );
};
