import React from 'react';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className = '',
  showArrow = true,
  'aria-label': ariaLabel,
  ...props
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`editorial-link ${className}`.trim()}
      aria-label={ariaLabel}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <span aria-hidden="true" style={{ marginLeft: '4px' }}>&nearr;</span>}
    </a>
  );
};
