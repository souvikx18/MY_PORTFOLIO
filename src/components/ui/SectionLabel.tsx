import React from 'react';

interface SectionLabelProps {
  label: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ label, className = '' }) => {
  return (
    <p className={`eyebrow ${className}`.trim()} style={{ marginBottom: '12px' }}>
      {label}
    </p>
  );
};
