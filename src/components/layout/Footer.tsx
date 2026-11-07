import React from 'react';
import { Container } from '../ui/Container';
import { profileData } from '../../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contacts = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/souvik-konarx18',
      href: profileData.contact.linkedinUrl,
      isExternal: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/souvikx18',
      href: profileData.contact.githubUrl,
      isExternal: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      id: 'email',
      label: 'Email',
      value: profileData.contact.email,
      href: `mailto:${profileData.contact.email}`,
      isExternal: false,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      id: 'phone',
      label: 'Phone',
      value: profileData.contact.phone,
      href: `tel:${profileData.contact.phone.replace(/\s+/g, '')}`,
      isExternal: false,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      id: 'telegram',
      label: 'Telegram',
      value: profileData.contact.telegramUsername,
      href: profileData.contact.telegramUrl,
      isExternal: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.195 1.006.128.832.942z" />
        </svg>
      )
    }
  ];

  return (
    <footer
      id="contact"
      className="section"
      style={{
        borderBottom: 'none',
        paddingBlock: '96px 40px',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <Container>
        <div className="footer-grid">
          {/* Left Column: Editorial Introduction */}
          <div>
            {/* Eyebrow Label with Contact Book Icon */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <rect x="6" y="3" width="14" height="18" rx="3" />
                <line x1="3" y1="7" x2="6" y2="7" />
                <line x1="3" y1="12" x2="6" y2="12" />
                <line x1="3" y1="17" x2="6" y2="17" />
                <circle cx="13" cy="9.5" r="2.3" />
                <path d="M9.5 16.5c0-1.8 1.5-3 3.5-3s3.5 1.2 3.5 3" />
              </svg>
              <span
                className="font-mono"
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  color: '#38BDF8',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase'
                }}
              >
                CONTACT DIRECTORY
              </span>
            </div>
            <h2
              style={{
                fontSize: 'var(--text-4xl)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom: '20px'
              }}
            >
              Let's build something reliable.
            </h2>
            <p
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                maxWidth: '460px',
                lineHeight: 'var(--leading-relaxed)',
                margin: 0
              }}
            >
              Open to software engineering opportunities, technical collaborations, and systems-focused development.
            </p>
          </div>

          {/* Right Column: Numbered Contact Index */}
          <div>
            <nav
              className="contact-index"
              aria-label="Contact and professional profiles"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {contacts.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="contact-index-item"
                  aria-label={`${item.label}: ${item.value}${item.isExternal ? ' (opens in new tab)' : ''}`}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 500 }}>{item.label}</span>
                    <span
                      className="font-mono"
                      style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}
                    >
                      {item.value}
                    </span>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ color: 'var(--accent-blue)', flexShrink: 0 }}
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer Meta Row */}
        <div
          style={{
            marginTop: '80px',
            paddingTop: '24px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)'
          }}
        >
          <p className="font-mono" style={{ margin: 0 }}>
            &copy; {currentYear} {profileData.name}. All verified rights reserved.
          </p>
          <p className="font-mono" style={{ margin: 0 }}>
            Designed & engineered with architectural restraint.
          </p>
        </div>
      </Container>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 1.1fr 1fr;
            gap: 80px;
          }
        }
        .contact-index-item {
          display: grid;
          grid-template-columns: 36px 1fr auto;
          align-items: center;
          padding-block: 18px;
          border-bottom: 1px solid var(--border-subtle);
          color: inherit;
          text-decoration: none;
          transition: padding-left var(--duration-fast) var(--ease-standard),
                      color var(--duration-fast) var(--ease-standard);
        }
        @media (hover: hover) and (pointer: fine) {
          .contact-index-item:hover {
            padding-left: 8px;
            color: var(--accent-blue);
          }
        }
      `}</style>
    </footer>
  );
};
