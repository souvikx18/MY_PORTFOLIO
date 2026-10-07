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
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position to apply sleek transparent backdrop when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        backgroundColor: isScrolled ? 'rgba(7, 10, 15, 0.45)' : 'var(--bg-primary)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(54, 207, 201, 0.12)' : '1px solid var(--border-subtle)',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'all 300ms cubic-bezier(0.2, 0.8, 0.2, 1)'
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

          {/* Day & Night Mode Switcher */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="btn-secondary"
            style={{
              minHeight: '34px',
              padding: '0 12px',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wide)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
            aria-label={`Switch to ${theme === 'light' ? 'Night' : 'Day'} mode`}
          >
            {theme === 'light' ? (
              <>
                <span aria-hidden="true" style={{ fontSize: '12px' }}>🌙</span>
                <span>NIGHT MODE</span>
              </>
            ) : (
              <>
                <span aria-hidden="true" style={{ fontSize: '12px' }}>☀️</span>
                <span>DAY MODE</span>
              </>
            )}
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
              fontSize: 'var(--text-xs)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
            aria-label={`Switch to ${theme === 'light' ? 'Night' : 'Day'} mode`}
          >
            {theme === 'light' ? '🌙 NIGHT' : '☀️ DAY'}
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
                <span className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-cyan)' }}>
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
