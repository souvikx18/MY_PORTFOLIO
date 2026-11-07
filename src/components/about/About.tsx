import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { profileData } from '../../data';
import { useIntersection } from '../../hooks/useIntersection';

export const About: React.FC = () => {
  const [sectionRef, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section id="about" ariaLabel="About Souvik Konar">
      <Container>
        <div
          ref={sectionRef}
          data-reveal
          className={isVisible ? 'is-visible' : ''}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px'
          }}
        >
          {/* Left Column: Academic & Identity Context */}
          <div>
            {/* Eyebrow Label with Avatar Icon */}
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
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="8" r="3.2" />
                <path d="M6 18.2c0-2.8 2.7-4.8 6-4.8s6 2 6 4.8" />
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
                ABOUT ME
              </span>
            </div>
            <h2
              style={{
                fontSize: 'var(--text-4xl)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom: '24px'
              }}
            >
              About Me &amp; Background
            </h2>

            <p
              style={{
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'var(--text-secondary)',
                marginBottom: '32px'
              }}
            >
              {profileData.bio}
            </p>

            <div
              className="editorial-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <p
                className="font-mono"
                style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--accent-cyan)',
                  margin: 0,
                  letterSpacing: 'var(--tracking-wide)'
                }}
              >
                EDUCATION &bull; BRAINWARE UNIVERSITY
              </p>

              <h3 style={{ fontSize: 'var(--text-xl)', margin: 0, fontWeight: 650 }}>
                {profileData.education.degree}
              </h3>

              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-muted)',
                  margin: 0
                }}
              >
                {profileData.education.institution} &bull; {profileData.education.timeline}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border-subtle)'
                }}
              >
                <p className="font-mono" style={{ fontSize: 'var(--text-sm)', margin: 0 }}>
                  Current CGPA: <strong>{profileData.education.cgpaCurrent}</strong>{' '}
                  <span style={{ color: 'var(--text-muted)' }}>
                    (1st Yr: {profileData.education.cgpaFirstYear})
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Practical Security Experience & Defensive Design */}
          <div>
            {/* Eyebrow Label with Open Book Icon */}
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
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                <path d="M12 7v14" />
                <path d="M10 21.5l2-1.5 2 1.5" />
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
                PRACTICAL EXPERIENCE
              </span>
            </div>
            <h2
              style={{
                fontSize: 'var(--text-4xl)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom: '24px'
              }}
            >
              Internship &amp; Practical Experience
            </h2>

            <div
              className="editorial-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '28px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <h3 style={{ fontSize: 'var(--text-xl)', margin: 0, fontWeight: 650 }}>
                  {profileData.internship.role}
                </h3>
                <span
                  className="font-mono"
                  style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-cyan)' }}
                >
                  {profileData.internship.organization}
                </span>
              </div>

              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-normal)',
                  margin: 0
                }}
              >
                {profileData.internship.description}
              </p>

              <ul
                style={{
                  paddingLeft: '18px',
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                {profileData.internship.keyTakeaways.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-muted)',
                      lineHeight: 'var(--leading-relaxed)'
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Outbound Verification Links */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Button
                href={profileData.contact.githubUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                icon={
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                }
              >
                GitHub Profile ↗
              </Button>
              <Button
                href={profileData.contact.linkedinUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                icon={
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                }
              >
                LinkedIn Profile ↗
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
