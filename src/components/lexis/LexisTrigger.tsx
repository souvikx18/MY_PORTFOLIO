import React from 'react';

interface LexisTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const LexisTrigger: React.FC<LexisTriggerProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="btn-primary lexis-launcher"
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls="lexis-dialog"
      aria-label={isOpen ? 'Close Lexis portfolio assistant' : 'Open Lexis portfolio assistant'}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 90,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
        minHeight: '48px',
        padding: '0 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-wide)'
      }}
    >
      <span
        aria-hidden="true"
        className="font-mono"
        style={{
          width: '20px',
          height: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--accent-cyan)',
          color: '#070A0F',
          fontSize: '10px',
          fontWeight: 700,
          borderRadius: 'var(--radius-sm)'
        }}
      >
        LX
      </span>
      <span>{isOpen ? 'CLOSE ASSISTANT' : 'ASK LEXIS &rarr;'}</span>
    </button>
  );
};
