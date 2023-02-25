import React from 'react';
import { Text, Button, Icon } from '../../atoms';
import styles from './cartList.module.scss';
import classNames from 'classnames/bind';
import { deleteCartItem } from '../../../../redux/ModalSlice';
import { useDispatch } from 'react-redux';

interface CartItemType {
  scoreName: string;
  artist: string;
  author: string;
  price: string;
  scoreId: string;
}

function CartList({ scoreName, artist, author, price, scoreId }: CartItemType) {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  function deleteItem() {
    dispatch(deleteCartItem(scoreName));
  }

  return (
    <li className={cx('cart-list')}>
      <div className={cx('title-wrapper')}>
        <Text weight="semibold">{scoreName}</Text>
        <Text color="gray">{artist}</Text>
      </div>
      <Text color="gray">{author}</Text>
      <Text weight="semibold">{`${Number(price).toLocaleString()}원`}</Text>
      <Button theme="secondary" size="tiny" onClick={deleteItem}>
        <Icon size="xs" color="gray" icon="FaTrash" />
      </Button>
    </li>
  );
}

export default CartList;
