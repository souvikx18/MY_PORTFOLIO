import React from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  icon,
  className = '',
  style,
  ...props
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClass = `${baseClass} ${className}`.trim();

  const content = icon ? (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      <span
        style={{
          width: '1px',
          height: '14px',
          backgroundColor: variant === 'primary' ? 'rgba(255, 255, 255, 0.32)' : 'rgba(255, 255, 255, 0.22)',
          margin: '0 11px 0 9px',
          flexShrink: 0
        }}
      />
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        {children}
      </span>
    </span>
  ) : (
    children
  );

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={combinedClass} style={style} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={combinedClass} style={style} {...buttonProps}>
      {content}
    </button>
  );
};
