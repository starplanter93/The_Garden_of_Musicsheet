import styles from './utilityMenu.module.scss';
import classNames from 'classnames/bind';
import { CartButton, UserButton } from '../../molecules';
import UserDropdown from '../UserDropdown/UserDropdown';
import { useRef, useState } from 'react';

const UtilityMenu = () => {
  const cx = classNames.bind(styles);
  const [dropdown, setDropdown] = useState(false);
  const closeDropdownTarget = useRef(null);

  return (
    <ul className={cx('utility-lists')}>
      <li className={cx('utility-list')}>
        <CartButton />
      </li>
      <li className={cx('utility-list')} ref={closeDropdownTarget}>
        <UserButton dropdown={dropdown} setDropdown={setDropdown} />
        {dropdown && (
          <div className={cx('utility-lnb')}>
            <UserDropdown
              closeDropdownTarget={closeDropdownTarget}
              setDropdown={setDropdown}
            />
          </div>
        )}
      </li>
    </ul>
  );
};

export default UtilityMenu;
