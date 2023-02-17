import React from 'react';
import { Text, ImgLayout } from '../../atoms';
import styles from './userCard.module.scss';
import classNames from 'classnames/bind';

interface UserCardProps {
  author: string;
  profileImg: string;
}

function UserCard({ author, profileImg }: UserCardProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('user-card')}>
      <ImgLayout alt="profile-img" shape="round" size="m" src={profileImg} />
      <Text size="lg" weight="bold">
        {author}
      </Text>
    </div>
  );
}

export default UserCard;
