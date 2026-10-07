import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { HeroCanvas } from './HeroCanvas';
import { HeroDeveloperCard } from './HeroDeveloperCard';
import { profileData } from '../../data';

export const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      className="section-ambient--hero"
      style={{
        position: 'relative',
        paddingBlock: 'clamp(64px, 10vh, 120px)',
        overflow: 'hidden'
      }}
    >
      {/* Layer 01 & 02: Procedural Technical Coordinate Grid Mesh */}
      <HeroCanvas />

      <Container style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Eyebrow & Status Telemetry */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '28px'
          }}
        >
          <SectionLabel label={profileData.eyebrow} />
          
          <div
            className="font-mono"
            style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)',
                boxShadow: '0 0 8px rgba(54, 207, 201, 0.5)',
                display: 'inline-block'
              }}
              aria-hidden="true"
            />
            <span>Full-Stack &amp; Systems Developer &bull; Kolkata, India</span>
          </div>
        </div>

        {/* Hero Split Layout: Editorial Typography on Left, Developer Profile Card on Right */}
        <div
          className="hero-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.3fr) minmax(300px, 1fr)',
            gap: 'clamp(28px, 4vw, 56px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Refined Editorial Headline & Positioning Statement */}
          <div>
            <h1
              style={{
                fontSize: 'var(--text-hero)',
                lineHeight: 'var(--leading-tight)',
                letterSpacing: 'var(--tracking-tight)',
                marginBlock: '0 20px',
                maxWidth: '720px',
                fontWeight: 650
              }}
            >
              {profileData.headline.map((line, idx) => (
                <span key={idx} style={{ display: 'block' }}>
                  {line}
                </span>
              ))}
            </h1>

            {/* Positioning Statement */}
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                maxWidth: '620px',
                marginBottom: '32px',
                lineHeight: 'var(--leading-normal)'
              }}
            >
              {profileData.positioningStatement}
            </p>

            {/* Primary & Secondary Actions */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '16px' }}>
              <Button href="#work" variant="primary">
                View All 6 Projects &rarr;
              </Button>
              <Button href="#contact" variant="secondary">
                Get In Touch &rarr;
              </Button>
            </div>
          </div>

          {/* Right Column: Authentic Developer Profile Console */}
          <div className="hero-developer-wrapper">
            <HeroDeveloperCard />
          </div>
        </div>

        {/* Natural Human Metadata Footer */}
        <div
          className="font-mono hero-metadata"
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-secondary)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '44px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Location:</span>{' '}
            <span>{profileData.locationCity}, {profileData.locationCountry}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Education:</span>{' '}
            <span>B.Tech CSE (3rd Year) &bull; Brainware University (CGPA 8.64)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Status:</span>{' '}
            <span>Open to software engineering roles &amp; internships</span>
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-developer-wrapper {
            max-width: 440px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};
