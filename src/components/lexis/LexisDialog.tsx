import React, { useEffect, useRef } from 'react';
import { LexisChat } from './LexisChat';

interface LexisDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LexisDialog: React.FC<LexisDialogProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div
        id="lexis-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Lexis Portfolio Knowledge Assistant"
        ref={dialogRef}
        style={{
          width: 'min(94vw, 560px)',
          height: 'min(88vh, 680px)',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          boxShadow: '0 12px 48px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        <LexisChat onClose={onClose} />
      </div>
    </div>
  );
};
