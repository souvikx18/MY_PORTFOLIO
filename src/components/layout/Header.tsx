import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { profileData } from '../../data';
import { Theme } from '../../hooks/useTheme';

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#work', label: 'WORK' },
    { href: '#approach', label: 'APPROACH' },
    { href: '#stack', label: 'STACK' },
    { href: '#about', label: 'ABOUT' },
    { href: '#contact', label: 'CONTACT' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 'var(--header-height)',
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background-color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)'
      }}
    >
      <Container
        as="div"
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Brand identity mark */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
            textDecoration: 'none',
            color: 'inherit'
          }}
          aria-label={`${profileData.name} — Return to top`}
        >
          <span
            className="font-mono"
            style={{
              fontWeight: 650,
              fontSize: 'var(--text-base)',
              letterSpacing: 'var(--tracking-tight)'
            }}
          >
            {profileData.initials}
          </span>
          <span style={{ color: 'var(--border)' }}>/</span>
          <span
            className="font-mono"
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--text-muted)'
            }}
          >
            {profileData.locationCity}, {profileData.locationCountry}
          </span>
        </a>

        {/* Desktop Navigation & Theme Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px'
          }}
          className="header-desktop-nav"
        >
          <nav aria-label="Main Navigation" style={{ display: 'flex', gap: '24px' }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="editorial-link"
                style={{
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-wide)',
                  color: 'var(--text-secondary)'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-secondary"
            style={{
              minHeight: '34px',
              padding: '0 12px',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wide)'
            }}
            aria-label={`Switch theme mode`}
          >
            {theme === 'light' ? 'MIDNIGHT TECH' : 'TECHNICAL LIGHT'}
          </button>
        </div>

        {/* Mobile Controls */}
        <div
          className="header-mobile-controls"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-secondary"
            style={{
              minHeight: '34px',
              padding: '0 10px',
              fontSize: 'var(--text-xs)'
            }}
            aria-label="Switch theme mode"
          >
            {theme === 'light' ? 'MIDNIGHT' : 'LIGHT'}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="btn-primary"
            style={{
              minHeight: '34px',
              padding: '0 12px',
              fontSize: 'var(--text-xs)'
            }}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </Container>

      {/* Accessible Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            left: 0,
            width: '100%',
            height: 'calc(100vh - var(--header-height))',
            backgroundColor: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '40px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 99
          }}
        >
          <nav
            aria-label="Mobile Navigation"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="editorial-link"
                style={{
                  fontSize: 'var(--text-xl)',
                  letterSpacing: 'var(--tracking-wide)',
                  paddingBlock: '12px',
                  borderBottom: '1px solid var(--border-subtle)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span>{link.label}</span>
                <span className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-bronze)' }}>
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-muted)'
            }}
          >
            <span>{profileData.name}</span>
            <span>{profileData.locationCity}, {profileData.locationCountry}</span>
          </div>
        </div>
      )}

      {/* Responsive Breakpoint CSS Injection for Header */}
      <style>{`
        @media (max-width: 768px) {
          .header-desktop-nav {
            display: none !important;
          }
          .header-mobile-controls {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
