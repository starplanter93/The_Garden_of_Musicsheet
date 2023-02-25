import React from 'react';
import { CartHeader, CartBody, CartFooter } from '../../molecules';
import classNames from 'classnames/bind';
import styles from './cartModal.module.scss';
import { cartModalHandler } from '../../../../redux/ModalSlice';
import { useDispatch } from 'react-redux';

function CartModal() {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  function cartModalCloser() {
    dispatch(cartModalHandler());
  }
  return (
    <div className={cx('backdrop')} onClick={cartModalCloser}>
      <section
        className={cx('cart-modal')}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
