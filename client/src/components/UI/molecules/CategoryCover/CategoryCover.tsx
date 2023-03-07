import classNames from 'classnames/bind';
import { updateProfile } from 'firebase/auth';
import { memo, useState, Dispatch, SetStateAction } from 'react';
import { auth } from '../../../../firebase/firebase';
import { Button, Icon, ImgLayout, Text } from '../../atoms';
import styles from './categoryCover.module.scss';
import { updateUserName } from '../../../../firebase/firebase';
import { useDispatch } from 'react-redux';
import { setUserName } from '../../../../redux/UserSlice';
import { ThreeDots } from 'react-loader-spinner';
interface CategoryCoverProps {
  category: string;
  thumbnail: string;
  title: string;
  artist?: string;
  mypage?: boolean;
  setModal?: Dispatch<SetStateAction<boolean>>;
  setEditType?: Dispatch<SetStateAction<'optout' | 'editPicture'>>;
}

const CategoryCover = ({
  mypage,
  category,
  thumbnail,
  title,
  artist,
  setModal,
  setEditType,
}: CategoryCoverProps) => {
  const cx = classNames.bind(styles);
  const [editmode, setEditMode] = useState(false);
  const [username, setUsername] = useState(category);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleNameSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (auth.currentUser && e.key === 'Enter') {
      setIsLoading(true);
      await updateProfile(auth.currentUser, { displayName: username });
      await updateUserName(auth.currentUser.uid, username);
      setEditMode(false);
      dispatch(setUserName(username));
      setIsLoading(false);
      window.location.reload();
    }
  };
  const handleNameChange = () => {
    setEditMode(true);
  };

  const handleEditPicture = () => {
    if (setModal && setEditType) {
      setModal(true);
      setEditType('editPicture');
    }
  };

  const handleOptOut = () => {
    if (setModal && setEditType) {
      setModal(true);
      setEditType('optout');
    }
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  if (mypage) {
    return (
      <div className={cx('category-cover')}>
        <div className={cx('cover-img')}>
          <ImgLayout
            shape="round"
            size="mypage"
            src={thumbnail}
            alt="커버 이미지"
          />
        </div>
        {isLoading ? (
          <div className={cx('spinner')}>
            <ThreeDots width="80" height="80" color="#a5a5a5" />
          </div>
        ) : (
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
                    <Button
                      size="tiny"
                      theme="transparent"
                      onClick={handleCancel}
                    >
                      <Icon icon="MdOutlineCancel" size="s" />
                    </Button>
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
                  <div className={cx('edit')}>
                    <Button
                      size="m"
                      theme="tertiary"
                      onClick={() => handleEditPicture()}
                    >
                      <>
                        <Icon icon="MdOutlineSettings" color="gray" size="xs" />
                        <Text color="gray">프로필 사진 변경</Text>
                      </>
                    </Button>
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
        )}
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

export default memo(CategoryCover);
