import classNames from 'classnames/bind';
import { updateProfile } from 'firebase/auth';
import { useState, Dispatch, SetStateAction } from 'react';
import { auth } from '../../../../firebase/firebase';
import { Button, Icon, ImgLayout, Text } from '../../atoms';
import styles from './categoryCover.module.scss';

interface CategoryCoverProps {
  category: string;
  thumbnail: string;
  title: string;
  artist?: string;
  mypage?: boolean;
  setModal?: Dispatch<SetStateAction<boolean>>;
}

const CategoryCover = ({
  mypage,
  category,
  thumbnail,
  title,
  artist,
  setModal,
}: CategoryCoverProps) => {
  const cx = classNames.bind(styles);
  const [editmode, setEditMode] = useState(false);
  const [username, setUsername] = useState(category);

  const handleNameSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (auth.currentUser && e.key === 'Enter') {
      updateProfile(auth.currentUser, { displayName: username });
      setEditMode(false);
      console.log(auth.currentUser);
    }
  };

  const handleOptOut = () => {
    if (setModal) {
      setModal(true);
    }
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
                    onKeyDown={(e) => handleNameSubmit(e)}
                    autoFocus
                  />
                </div>
              ) : (
                <div className={cx('username')}>
                  <Text size="txlg" weight="bold">
                    {username}
                  </Text>
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
                  <Text size="lg" color="gray">
                    원
                  </Text>
                </div>
                <div>
                  <Button
                    size="s"
                    theme="transparent"
                    onClick={() => handleOptOut()}
                  >
                    <Text color="gray">회원탈퇴</Text>
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
