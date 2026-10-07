import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
  style?: React.CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  style
}) => {
  return (
    <Component className={`container ${className}`.trim()} style={style}>
      {children}
    </Component>
  );
};
