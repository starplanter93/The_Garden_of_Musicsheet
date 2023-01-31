import React from 'react';
import './text.scss';

interface TextProps {
  size?: 'xs' | 's' | 'm' | 'lg' | 'xlg' | '2xlg';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'black' | 'green' | 'white' | 'blue' | 'red';
  value: string;
}

function Text({
  size = 'm',
  weight = 'regular',
  color = 'black',
  value,
}: TextProps) {
  return (
    <span
      className={[
        'text',
        `text--${size}`,
        `text--${weight}`,
        `text--${color}`,
      ].join(' ')}
    >
      {value}
    </span>
  );
}

export default Text;
