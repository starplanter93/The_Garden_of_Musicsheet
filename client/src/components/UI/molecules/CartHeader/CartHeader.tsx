import React from 'react';
import { Button, Icon, Text } from '../../atoms';
import styles from './cartHeader.module.scss';
import classNames from 'classnames/bind';
import { cartModalHandler } from '../../../../redux/ModalSlice';
import { useDispatch } from 'react-redux';

function CartHeader() {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  function cartModalCloser() {
    dispatch(cartModalHandler());
  }
  return (
    <header className={cx('cart-header')}>
      <Button theme="transparent" size="auto" onClick={cartModalCloser}>
        <>
          <Icon icon="MdKeyboardArrowLeft" />
          <Text weight="semibold">쇼핑 계속하기</Text>
        </>
      </Button>
    </header>
  );
}

export default CartHeader;
