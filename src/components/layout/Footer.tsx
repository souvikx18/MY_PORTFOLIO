import React from 'react';
import { Container } from '../ui/Container';
import { SectionLabel } from '../ui/SectionLabel';
import { profileData } from '../../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contacts = [
    {
      index: '01',
      label: 'LinkedIn',
      value: 'linkedin.com/in/souvik-konarx18',
      href: profileData.contact.linkedinUrl,
      isExternal: true
    },
    {
      index: '02',
      label: 'GitHub',
      value: 'github.com/souvikx18',
      href: profileData.contact.githubUrl,
      isExternal: true
    },
    {
      index: '03',
      label: 'Email',
      value: profileData.contact.email,
      href: `mailto:${profileData.contact.email}`,
      isExternal: false
    },
    {
      index: '04',
      label: 'Phone',
      value: profileData.contact.phone,
      href: `tel:${profileData.contact.phone.replace(/\s+/g, '')}`,
      isExternal: false
    },
    {
      index: '05',
      label: 'Telegram',
      value: profileData.contact.telegramUsername,
      href: profileData.contact.telegramUrl,
      isExternal: true
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
            <SectionLabel label="05 — CONTACT DIRECTORY" />
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
                  key={item.index}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="contact-index-item"
                  aria-label={`${item.label}: ${item.value}${item.isExternal ? ' (opens in new tab)' : ''}`}
                >
                  <span
                    aria-hidden="true"
                    className="font-mono"
                    style={{ color: 'var(--accent-amber)', fontSize: 'var(--text-xs)' }}
                  >
                    {item.index}
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
                  <span aria-hidden="true" style={{ fontSize: 'var(--text-base)', color: 'var(--accent-blue)' }}>
                    &nearr;
                  </span>
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
          grid-template-columns: 44px 1fr auto;
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
