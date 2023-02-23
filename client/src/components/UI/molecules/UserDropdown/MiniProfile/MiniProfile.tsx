import styles from './miniProfile.module.scss';
import classNames from 'classnames/bind';
import { Icon, ImgLayout, Text } from '../../../atoms';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { memo, useEffect, useState } from 'react';
import { auth } from '../../../../../firebase/firebase';
import { getUserCash } from '../../../../../firebase/firebase';

const MiniProfile = () => {
  const cx = classNames.bind(styles);
  const { photoURL, displayName, email } = useSelector(
    (state: RootState) => state.user.userReducer
  );
  const [cash, setCash] = useState('');
  const [picture, setPicture] = useState(photoURL);

  useEffect(() => {
    const user = auth.currentUser;
    if (user && user.photoURL) {
      getUserCash(user.uid).then((el) => el && setCash(el.cash));
      setPicture(user.photoURL);
    }
  }, [auth]);

  return (
    <div className={cx('profile-wrapper')}>
      <div className={cx('profile-info')}>
        <ImgLayout size="s" src={picture} alt="프로필사진" />
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
