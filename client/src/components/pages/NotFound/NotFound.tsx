import React from 'react';
import styles from './notFound.module.scss';
import classNames from 'classnames/bind';
import notFoundImg from '../../../assets/notFound.png';
import { Link } from 'react-router-dom';

function NotFound() {
  const cx = classNames.bind(styles);
  const notFound = notFoundImg;
  return (
    <>
      <img src={notFound} alt="notfound" className={cx('error-img')} />
      <div className={cx('text-wrapper')}>
        <h1>죄송합니다.</h1>
        <h2>원하시는 페이지를 찾을 수 없습니다.</h2>
      </div>
      <Link className={cx('link-to-main')} to="/">
        메인으로 가기
      </Link>
    </>
  );
}

export default NotFound;
