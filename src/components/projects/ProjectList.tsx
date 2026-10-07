import React from 'react';
import { Project } from '../../types/portfolio';
import { ScrollProjectTransition, ProjectItem } from './ScrollProjectTransition';

interface ProjectListProps {
  projects: readonly Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const projectItems: ProjectItem[] = projects.map((p, idx) => ({
    number: String(idx + 1).padStart(2, '0'),
    title: p.name
  }));

  return <ScrollProjectTransition projects={projectItems} />;
};
