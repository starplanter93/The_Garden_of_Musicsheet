import React from 'react';
import CartList from '../CartList/CartList';
import styles from './cartBody.module.scss';
import classNames from 'classnames/bind';

function CartBody() {
  const cx = classNames.bind(styles);
  return (
    <ul className={cx('cart-body')}>
      <CartList />
    </ul>
  );
}

export default CartBody;
