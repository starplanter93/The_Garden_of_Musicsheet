import React from 'react';
import styles from './text.module.scss';
import classNames from 'classnames/bind';

interface TextProps {
  size?: 'xs' | 's' | 'm' | 'lg' | 'xlg' | '2xlg';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'black' | 'green' | 'white' | 'blue' | 'red';
  children: string;
}

const cx = classNames.bind(styles);

function Text({
  size = 'm',
  weight = 'regular',
  color = 'black',
  children,
}: TextProps) {
  return (
    <span className={cx('text', `${size}`, `${weight}`, `${color}`)}>
      {children}
    </span>
  );
}

export default Text;
