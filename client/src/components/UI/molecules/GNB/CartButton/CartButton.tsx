import styles from './cartButton.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../../atoms';
import { cartModalHandler } from '../../../../../redux/ModalSlice';
import { useDispatch } from 'react-redux';

// Todo: 버튼 클릭시 장바구니 표시
// Todo: 장바구니에 담긴 개수
const CartButton = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  function cartModalOpener() {
    dispatch(cartModalHandler());
  }
  return (
    <div className={cx('cartbutton-wrapper')}>
      <Button theme="transparent" size="auto" onClick={cartModalOpener}>
        <Icon icon="MdOutlineShoppingBag" />
      </Button>
      <span className={cx('bubble')}>
        <Text size="s" weight="medium">
          10
        </Text>
      </span>
    </div>
  );
};

export default CartButton;
