import React from 'react';
import { Project } from '../../types/portfolio';
import { ProjectSelectorStrip } from './ProjectSelectorStrip';
import { AllProjectsShowcase } from './AllProjectsShowcase';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

interface ProjectListProps {
  projects: readonly Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <Section id="work" ariaLabel="Selected Work" className="section-ambient--work">
      <Container>
        {/* Minimal Scroll / Interactive Project Name Transition Strip (Takes medium space as shown in img 3) */}
        <ProjectSelectorStrip projects={projects} />

        {/* Full Project Details, Architecture Breakdown & Live Evidence (Under the strip) */}
        <AllProjectsShowcase projects={projects} />
      </Container>
    </Section>
  );
};
