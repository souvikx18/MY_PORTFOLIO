import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  style,
  ariaLabel
}) => {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`section ${className}`.trim()}
      style={style}
    >
      {children}
    </section>
  );
};
