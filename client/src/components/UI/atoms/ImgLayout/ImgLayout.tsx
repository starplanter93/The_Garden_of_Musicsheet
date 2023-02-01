import React from 'react';
import styles from './imglayout.module.scss';
import classNames from 'classnames/bind';
import defaultImg from '/src/assets/default-image.jpg';

interface ImgLayoutProps {
  shape?: 'round' | 'square';
  size?: 'lg' | 'm' | 's';
  src?: string;
  alt: string;
}

const cx = classNames.bind(styles);

function ImgLayout({
  shape = 'round',
  size = 'm',
  src = defaultImg,
  alt,
}: ImgLayoutProps) {
  return (
    <div className={cx(`img-cover`, `${shape}`, `${size}`)}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ImgLayout;
