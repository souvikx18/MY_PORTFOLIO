import React, { useState } from 'react';

interface LexisTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const LexisTrigger: React.FC<LexisTriggerProps> = ({ isOpen, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (isOpen) return null;

  return (
    <div
      className="lexis-trigger-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '22px',
        right: '22px',
        zIndex: 900,
        display: 'flex',
        alignItems: 'center',
        gap: isHovered ? '10px' : '0px',
        userSelect: 'none',
        transition: 'gap 360ms cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Realistic Cybernetic Capsule: ASK LEXIS → */}
      <button
        type="button"
        onClick={onToggle}
        aria-label="Ask Lexis AI Assistant"
        tabIndex={isHovered ? 0 : -1}
        style={{
          padding: 0,
          margin: 0,
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          // Smooth slide expansion from behind the robot
          width: isHovered ? '204px' : '0px',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0) scale(1)' : 'translateX(22px) scale(0.95)',
          pointerEvents: isHovered ? 'auto' : 'none',
          overflow: 'hidden',
          transition:
            'width 380ms cubic-bezier(0.16, 1, 0.3, 1), opacity 280ms ease, transform 380ms cubic-bezier(0.16, 1, 0.3, 1), filter 280ms ease',
          filter: isHovered
            ? 'drop-shadow(0 10px 24px rgba(0, 0, 0, 0.85))'
            : 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.7))'
        }}
      >
        <img
          src="/images/lexis-capsule.png"
          alt="Ask Lexis"
          style={{
            width: '204px',
            minWidth: '204px',
            height: 'auto',
            display: 'block',
            borderRadius: '14px',
            pointerEvents: 'none'
          }}
        />
      </button>

      {/* Robot Mascot Launcher Button (Always visible floating mascot) */}
      <button
        type="button"
        onClick={onToggle}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="lexis-dialog"
        aria-label="Open Lexis AI Assistant"
        style={{
          padding: 0,
          margin: 0,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: isHovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
          filter: isHovered
            ? 'drop-shadow(0 10px 22px rgba(0, 0, 0, 0.75))'
            : 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.55))',
          transition:
            'transform 280ms cubic-bezier(0.16, 1, 0.3, 1), filter 280ms ease'
        }}
      >
        <img
          src="/images/lexis-robot-transparent.png"
          alt="Lexis AI Assistant"
          style={{
            width: '88px',
            height: 'auto',
            display: 'block',
            pointerEvents: 'none'
          }}
        />
      </button>
    </div>
  );
};
