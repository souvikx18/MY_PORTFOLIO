import React, { useEffect, useRef, useState } from 'react';
import { LexisChat } from './LexisChat';

interface LexisDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LexisDialog: React.FC<LexisDialogProps> = ({ isOpen, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  // Lock body & html scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      data-lenis-prevent="true"
      onWheel={e => e.stopPropagation()}
      onTouchMove={e => e.stopPropagation()}
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
        backgroundColor: 'rgba(3, 6, 14, 0.78)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isFullscreen ? '0' : '16px',
        transition: 'padding 250ms ease'
      }}
    >
      <div
        id="lexis-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Lexis Portfolio Knowledge Assistant"
        data-lenis-prevent="true"
        ref={dialogRef}
        style={{
          width: isFullscreen ? '100vw' : 'min(95vw, 960px)',
          height: isFullscreen ? '100vh' : 'min(94vh, 780px)',
          backgroundColor: '#070B13',
          border: isFullscreen ? 'none' : '1px solid rgba(56, 189, 248, 0.35)',
          borderRadius: isFullscreen ? '0' : '20px',
          boxShadow: isFullscreen
            ? 'none'
            : '0 24px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(56, 189, 248, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition:
            'width 280ms cubic-bezier(0.16, 1, 0.3, 1), height 280ms cubic-bezier(0.16, 1, 0.3, 1), border-radius 250ms ease'
        }}
      >
        <LexisChat
          onClose={onClose}
          isFullscreen={isFullscreen}
          onToggleFullscreen={() => setIsFullscreen(prev => !prev)}
        />
      </div>
    </div>
  );
};
