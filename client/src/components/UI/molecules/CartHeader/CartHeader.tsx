import React from 'react';
import { Button, Icon } from '../../atoms';
import styles from 'cartHeader.module.scss';
import classNames from 'classnames/bind';

function CartHeader() {
  const cx = classNames.bind(styles);
  return (
    <header className={cx('cart-header')}>
      <Button>
        <>
          <Icon icon="MdKeyboardArrowLeft" />
          쇼핑 계속하기
        </>
      </Button>
    </header>
  );
}

export default CartHeader;
