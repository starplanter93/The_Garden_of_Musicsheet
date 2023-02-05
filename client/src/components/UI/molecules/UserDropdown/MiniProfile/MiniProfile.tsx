import styles from './miniProfile.module.scss';
import classNames from 'classnames/bind';
import { Icon, ImgLayout, Text } from '../../../atoms';

// Todo: src, username, email, cash
const MiniProfile = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('profile-wrapper')}>
      <div className={cx('profile-info')}>
        <ImgLayout
          size="s"
          src="https://lh3.googleusercontent.com/ogw/AAEL6sgMlJvuCWZwwiG2zRIo7a1f7Ihd3a845sDU0u6mJg=s64-c-mo"
          alt="프로필사진"
        />
        <div>
          <Text weight="semibold">Username</Text>
          <Text size="s">abcdef1234@gmail.com</Text>
        </div>
      </div>
      <div className={cx('profile-cash')}>
        <Icon icon="BiCoin" size="s" color="gray" />
        <Text size="s" color="gray">
          캐시
        </Text>
        <Text weight="medium">1,000,000원</Text>
      </div>
    </div>
  );
};

export default MiniProfile;
