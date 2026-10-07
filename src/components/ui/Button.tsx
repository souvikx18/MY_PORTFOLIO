import React from 'react';

type BaseProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
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
  className = '',
  style,
  ...props
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClass = `${baseClass} ${className}`.trim();

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={combinedClass} style={style} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type="button" className={combinedClass} style={style} {...buttonProps}>
      {children}
    </button>
  );
};
