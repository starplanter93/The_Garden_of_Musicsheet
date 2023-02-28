import React from 'react';
import { LoadingSpinner } from '../UI/atoms';
import classNames from 'classnames/bind';
import styles from './test.module.scss';

function Test() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('loading-wrapper')}>
      <LoadingSpinner />
    </div>
  );
}

export default Test;
