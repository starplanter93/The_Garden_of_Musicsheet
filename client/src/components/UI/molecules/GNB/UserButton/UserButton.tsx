import styles from './userButton.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, ImgLayout } from '../../../atoms';

const UserButton = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('userbutton-wrapper')}>
      <Icon icon="MdOutlineArrowDropDown" size="s" />
      <Button theme="transparent" size="auto">
        <ImgLayout
          size="s"
          src="https://lh3.googleusercontent.com/ogw/AAEL6sgMlJvuCWZwwiG2zRIo7a1f7Ihd3a845sDU0u6mJg=s64-c-mo"
          alt="아바타"
        />
      </Button>
    </div>
  );
};

export default UserButton;
