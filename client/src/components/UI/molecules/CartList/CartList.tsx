import React, { Dispatch, SetStateAction } from 'react';
import { Text, Button, Icon } from '../../atoms';
import styles from './cartList.module.scss';
import classNames from 'classnames/bind';
import { deleteCartItem } from '../../../../firebase/firebase';
import { ScoreInfoType } from '../../../pages/Main/Main';
import { useDispatch } from 'react-redux';
import { countCartItem } from '../../../../redux/ModalSlice';

interface CartItemType {
  scoreName: string;
  artist: string;
  author: string;
  price: string;
  scoreId: string;
  setCartItems: Dispatch<SetStateAction<ScoreInfoType[]>>;
}

function CartList({
  scoreName,
  artist,
  author,
  price,
  scoreId,
  setCartItems,
}: CartItemType) {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();

  function deleteItem() {
    deleteCartItem(scoreId).then((data) => {
      setCartItems(data);
      dispatch(countCartItem(data.length));
    });
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
