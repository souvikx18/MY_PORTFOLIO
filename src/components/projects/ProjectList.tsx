import React from 'react';
import { Project } from '../../types/portfolio';
import { AllProjectsShowcase } from './AllProjectsShowcase';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionLabel } from '../ui/SectionLabel';

interface ProjectListProps {
  projects: readonly Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <Section id="work" ariaLabel="Selected Work" className="section-ambient--work">
      <Container>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <SectionLabel label="01 — SELECTED WORK" />
            <h2
              style={{
                fontSize: 'var(--text-4xl)',
                letterSpacing: 'var(--tracking-tight)',
                margin: '8px 0 0 0'
              }}
            >
              Engineering Evidence &amp; Systems
            </h2>
          </div>

          <span
            className="font-mono"
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--text-muted)'
            }}
          >
            ALL 6 VERIFIED REPOSITORIES &bull; LIVE INTERACTIVE SCHEMATICS
          </span>
        </div>

        {/* All Projects Showcase */}
        <AllProjectsShowcase projects={projects} />
      </Container>
    </Section>
  );
};
