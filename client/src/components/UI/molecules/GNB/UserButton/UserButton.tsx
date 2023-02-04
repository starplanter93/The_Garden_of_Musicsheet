import styles from './userButton.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, ImgLayout } from '../../../atoms';
import { Dispatch, SetStateAction } from 'react';

interface UserButtonProps {
  dropdown: boolean;
  setDropdown: Dispatch<SetStateAction<boolean>>;
}

const UserButton = ({ dropdown, setDropdown }: UserButtonProps) => {
  const cx = classNames.bind(styles);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={cx('userbutton-wrapper')}>
      <Button theme="transparent" size="auto" onClick={handleClick}>
        {/* Todo: src */}
        <ImgLayout
          size="s"
          src="https://lh3.googleusercontent.com/ogw/AAEL6sgMlJvuCWZwwiG2zRIo7a1f7Ihd3a845sDU0u6mJg=s64-c-mo"
          alt="아바타"
        />
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
