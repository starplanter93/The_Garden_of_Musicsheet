import classNames from 'classnames/bind';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../../../firebase/firebase';
import { Button, Icon, ImgLayout, Input, Text } from '../../atoms';
import styles from './categoryCover.module.scss';

interface CategoryCoverProps {
  category: string;
  thumbnail: string;
  title: string;
  artist?: string;
  mypage?: boolean;
}

const CategoryCover = ({
  mypage,
  category,
  thumbnail,
  title,
  artist,
}: CategoryCoverProps) => {
  const cx = classNames.bind(styles);
  const [editmode, setEditMode] = useState(false);
  const [username, setUsername] = useState(category);

  const handleNameChange = () => {
    setEditMode(true);
    console.log('hi');
  };
  if (mypage) {
    return (
      <div className={cx('category-cover')}>
        <div className={cx('cover-img')}>
          <ImgLayout
            shape="round"
            size="lg"
            src={thumbnail}
            alt="커버 이미지"
          />
        </div>
        <div className={cx('user-info')}>
          <ul>
            <li className={cx('top')}>
              {editmode ? (
                <div className={cx('username')}>
                  <input
                    className={cx('name-input')}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' ? setEditMode(false) : null
                    }
                    autoFocus
                  />
                </div>
              ) : (
                <div className={cx('username')}>
                  <Text size="txlg" weight="bold">
                    {username}
                  </Text>
                  <Button
                    size="tiny"
                    theme="transparent"
                    onClick={handleNameChange}
                  >
                    <Icon icon="BiPencil" size="s" />
                  </Button>
                </div>
              )}
              <Text size="lg" color="gray">
                {title}
              </Text>
            </li>
            {artist && (
              <li className={cx('bottom')}>
                <div className={cx('cash')}>
                  <Icon icon="BiCoin" color="gray" size="s" />
                  <Text size="lg" color="gray">
                    {artist}
                  </Text>
                </div>
                <div>
                  <Button size="m" theme="tertiary">
                    <>
                      <Icon icon="MdOutlineSettings" color="gray" size="xs" />
                      <Text color="gray">프로필 사진 변경</Text>
                    </>
                  </Button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={cx('category-cover')}>
      <div className={cx('cover-img')}>
        <ImgLayout shape="square" size="lg" src={thumbnail} alt="커버 이미지" />
      </div>
      <div className={cx('cover-info')}>
        <ul>
          <li className={cx('info-category')}>
            <Text size="lg">{category}</Text>
          </li>
          <li className={cx('info-title')}>
            <Text size="txlg" weight="bold">
              {title}
            </Text>
          </li>
          {artist && (
            <li className={cx('info-artist')}>
              <Text size="lg" color="gray">
                {artist}
              </Text>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategoryCover;
