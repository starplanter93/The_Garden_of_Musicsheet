import styles from './miniProfile.module.scss';
import classNames from 'classnames/bind';
import { Icon, ImgLayout, Text } from '../../../atoms';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { memo } from 'react';

const MiniProfile = () => {
  const cx = classNames.bind(styles);
  const { photoURL, displayName, email, cash } = useSelector(
    (state: RootState) => state.user.userReducer
  );

  return (
    <div className={cx('profile-wrapper')}>
      <div className={cx('profile-info')}>
        <ImgLayout size="s" src={photoURL} alt="프로필사진" />
        <div>
          <Text weight="semibold">{displayName}</Text>
          <Text size="s">{email}</Text>
        </div>
      </div>
      <div className={cx('profile-cash')}>
        <Icon icon="BiCoin" size="s" color="gray" />
        <Text size="s" color="gray">
          캐시
        </Text>
        <Text weight="medium">{`${Number(cash).toLocaleString()}원`}</Text>
      </div>
    </div>
  );
};

export default memo(MiniProfile);
