import React from 'react';
import { CartHeader, CartBody, CartFooter } from '../../molecules';
import classNames from 'classnames/bind';
import styles from './cartModal.module.scss';

function CartModal() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('backdrop')}>
      <section className={cx('cart-modal')}>
        <CartHeader />
        <div className={cx('cart-body-wrapper')}>
          <CartBody />
        </div>
        <CartFooter />
      </section>
    </div>
  );
}

export default CartModal;
