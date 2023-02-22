import styles from './userDropdown.module.scss';
import classNames from 'classnames/bind';
import { MiniProfile, UserMenu } from '../../molecules';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface UserDropdownProps {
  closeDropdownTarget: any;
  setDropdown: Dispatch<SetStateAction<boolean>>;
}

const UserDropdown = ({
  closeDropdownTarget,
  setDropdown,
}: UserDropdownProps) => {
  const cx = classNames.bind(styles);

  const handleDropdownClose = (event: any) => {
    if (!closeDropdownTarget.current.contains(event.target)) setDropdown(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleDropdownClose);
    return () => {
      document.removeEventListener('click', handleDropdownClose);
    };
  }, []);

  return (
    <div className={cx('dropdown-wrapper')}>
      <MiniProfile />
      <UserMenu setDropdown={setDropdown} />
    </div>
  );
};

export default UserDropdown;
