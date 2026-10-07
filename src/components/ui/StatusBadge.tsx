import React from 'react';
import { ProjectStatus } from '../../types/portfolio';

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const statusModifier =
    status === 'HOSTED'
      ? 'status-badge--hosted'
      : status === 'IN DEVELOPMENT'
      ? 'status-badge--in-dev'
      : 'status-badge--not-deployed';

  return (
    <span className={`status-badge ${statusModifier} ${className}`.trim()} role="status">
      <span
        aria-hidden="true"
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'currentColor'
        }}
      />
      <span>{status}</span>
    </span>
  );
};
