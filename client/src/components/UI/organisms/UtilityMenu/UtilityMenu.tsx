import styles from './utilityMenu.module.scss';
import classNames from 'classnames/bind';
import { CartButton, UserButton } from '../../molecules';
import UserDropdown from '../UserDropdown/UserDropdown';
import { useState } from 'react';

const UtilityMenu = () => {
  const cx = classNames.bind(styles);
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul className={cx('utility-lists')}>
      <li className={cx('utility-list')}>
        <CartButton />
      </li>
      <li className={cx('utility-list')}>
        <UserButton dropdown={dropdown} setDropdown={setDropdown} />
        <div className={cx('utility-lnb', dropdown && 'hide')}>
          <UserDropdown />
        </div>
      </li>
    </ul>
  );
};

export default UtilityMenu;
