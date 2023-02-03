import styles from './userButton.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, ImgLayout } from '../../../atoms';
import { useState } from 'react';

// Todo: 페칭한 src 데이터로 수정
const UserButton = () => {
  const [toggle, setToggle] = useState(false);

  const cx = classNames.bind(styles);

  const showDropdownMenu = () => {
    setToggle(!toggle);
    // Todo: toggle state가 true일 때 드롭다운메뉴 표시
  };

  return (
    <div className={cx('userbutton-wrapper')}>
      <Button theme="transparent" size="auto" onClick={showDropdownMenu}>
        <ImgLayout
          size="s"
          src="https://lh3.googleusercontent.com/ogw/AAEL6sgMlJvuCWZwwiG2zRIo7a1f7Ihd3a845sDU0u6mJg=s64-c-mo"
          alt="아바타"
        />
      </Button>
      {toggle ? (
        <Icon icon="MdOutlineArrowDropUp" size="s" />
      ) : (
        <Icon icon="MdOutlineArrowDropDown" size="s" />
      )}
    </div>
  );
};

export default UserButton;
