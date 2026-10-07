import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { HeroCanvas } from './HeroCanvas';
import { Hero3DObject } from './Hero3DObject';
import { profileData } from '../../data';

export const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      className="section-ambient--hero"
      style={{
        position: 'relative',
        paddingBlock: 'clamp(72px, 12vh, 140px)',
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
            marginBottom: '24px'
          }}
        >
          <SectionLabel label={profileData.eyebrow} />
          
          <div
            className="font-mono"
            style={{
              fontSize: '11px',
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
                boxShadow: '0 0 8px rgba(54, 207, 201, 0.4)',
                display: 'inline-block'
              }}
              aria-hidden="true"
            />
            <span>SYSTEM DISCIPLINE &bull; CONSTRAINT-FIRST ARCHITECTURE</span>
          </div>
        </div>

        {/* Hero Split Layout: Editorial Typography on Left, 3D Computational Object on Right */}
        <div
          className="hero-split-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 1fr)',
            gap: 'clamp(28px, 4vw, 56px)',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Massive Editorial Headline & Positioning Statement */}
          <div>
            <h1
              style={{
                fontSize: 'var(--text-hero)',
                lineHeight: 'var(--leading-none)',
                letterSpacing: 'var(--tracking-tighter)',
                marginBlock: '0 24px',
                maxWidth: '920px'
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
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                maxWidth: '680px',
                marginBottom: '36px',
                lineHeight: 'var(--leading-snug)'
              }}
            >
              {profileData.positioningStatement}
            </p>

            {/* Primary & Secondary Actions */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '32px' }}>
              <Button href="#work" variant="primary">
                View All 6 Projects &rarr;
              </Button>
              <Button href="#contact" variant="secondary">
                Get In Touch &rarr;
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive 3D Computational Polyhedron */}
          <div
            className="hero-3d-wrapper editorial-card"
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'radial-gradient(circle at center, var(--surface-raised) 0%, var(--surface) 100%)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '10px',
                color: 'var(--accent-cyan)',
                letterSpacing: '0.08em',
                marginBottom: '8px',
                alignSelf: 'flex-start'
              }}
            >
              SYS.3D // PERSPECTIVE MATRIX PROJECTION
            </div>

            <Hero3DObject />

            <div
              className="font-mono"
              style={{
                fontSize: '10px',
                color: 'var(--text-muted)',
                marginTop: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '8px'
              }}
            >
              <span>VERTICES: 12</span>
              <span>EDGES: 30</span>
              <span>INERTIA: ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Editorial Metadata Footer */}
        <div
          className="font-mono hero-metadata"
          style={{
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '44px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <div>
            <span style={{ color: 'var(--accent-amber)' }}>LOCATION:</span>{' '}
            {profileData.locationCity.toUpperCase()}, {profileData.locationCountry.toUpperCase()}
          </div>
          <div>
            <span style={{ color: 'var(--accent-amber)' }}>EDUCATION:</span>{' '}
            3RD-YEAR B.TECH CSE &bull; BRAINWARE UNIVERSITY (CGPA 8.64)
          </div>
          <div>
            <span style={{ color: 'var(--accent-amber)' }}>AVAILABILITY:</span>{' '}
            OPEN FOR SOFTWARE ENGINEERING OPPORTUNITIES
          </div>
        </div>
      </Container>

      <style>{`
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-3d-wrapper {
            max-width: 380px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};
