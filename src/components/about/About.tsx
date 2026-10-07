import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionLabel } from '../ui/SectionLabel';
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
            <SectionLabel label="04 — ABOUT" />
            <h2
              style={{
                fontSize: 'var(--text-4xl)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom: '24px'
              }}
            >
              Background &amp; Systems Focus
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
                  color: 'var(--accent-amber)',
                  margin: 0,
                  letterSpacing: 'var(--tracking-wide)'
                }}
              >
                ACADEMIC RECORD &bull; BRAINWARE UNIVERSITY
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
                <p className="font-mono" style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: 0 }}>
                  12th WBCHSE: {profileData.education.higherSecondary.percentage} ({profileData.education.higherSecondary.year}) &bull; 10th WBBSE: {profileData.education.secondary.percentage} ({profileData.education.secondary.year})
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Practical Security Experience & Defensive Design */}
          <div>
            <SectionLabel label="PRACTICAL EXPERIENCE" />
            <h2
              style={{
                fontSize: 'var(--text-4xl)',
                letterSpacing: 'var(--tracking-tight)',
                marginBottom: '24px'
              }}
            >
              Internship &amp; Defensive Design
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
              >
                GitHub Profile &nearr;
              </Button>
              <Button
                href={profileData.contact.linkedinUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile &nearr;
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
