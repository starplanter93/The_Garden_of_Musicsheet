import styles from './userButton.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, ImgLayout } from '../../../atoms';
import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

interface UserButtonProps {
  dropdown: boolean;
  setDropdown: Dispatch<SetStateAction<boolean>>;
}

const UserButton = ({ dropdown, setDropdown }: UserButtonProps) => {
  const cx = classNames.bind(styles);
  const { photoURL } = useSelector(
    (state: RootState) => state.user.userReducer
  );

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={cx('userbutton-wrapper')}>
      <Button theme="transparent" size="auto" onClick={handleClick}>
        <ImgLayout size="s" src={photoURL} alt="아바타" />
      </Button>
      {dropdown ? (
        <Icon icon="MdOutlineArrowDropUp" size="s" />
      ) : (
        <Icon icon="MdOutlineArrowDropDown" size="s" />
      )}
    </div>
  );
};

export default UserButton;
