import styles from './myPageModal.module.scss';
import classNames from 'classnames/bind';
import { Button, ImgLayout, Text } from '../../atoms';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import {
  auth,
  userOptout,
  postProfilePicture,
  updateUserPicture,
} from '../../../../firebase/firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { ThreeDots } from 'react-loader-spinner';
import { persistor } from '../../../../redux/store';
import { useDispatch } from 'react-redux';
import { setFile } from '../../../../redux/FileSlice';
import { setUserProfilePicture } from '../../../../redux/UserSlice';

interface MyPageModalProps {
  type: 'optout' | 'editPicture';
  setModal: Dispatch<SetStateAction<boolean>>;
}

const MyPageModal = ({ type, setModal }: MyPageModalProps) => {
  const dispatch = useDispatch();
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');
  const [isPending, setIsPending] = useState(false);

  if (type === 'optout') {
    const handleOptOut = async () => {
      if (user)
        try {
          // deleteUser(user);
          await userOptout(user.uid);
          await auth.signOut();
          await persistor.purge();
          toast.success('그동안 이용해주셔서 고마워요!🙇‍♂️');
          navigate('/');
          return;
        } catch (err) {
          console.log(err);
        }
    };
    return (
      <div className={cx('background')}>
        <div className={cx('container')}>
          <div className={cx('closebtn')}>
            <Button size="tiny" onClick={() => setModal(false)}>
              X
            </Button>
          </div>
          <div className={cx('title')}>
            <Text size="xlg" weight="semibold">
              정말 탈퇴하시겠습니까?
            </Text>
          </div>
          <div className={cx('body')}>
            <Text size="xlg">남아있는 캐쉬가 전부 없어질 거에요😢</Text>
          </div>
          <div className={cx('footer')}>
            <Button theme="cancel" size="m" onClick={() => setModal(false)}>
              <Text color="white">취소하기</Text>
            </Button>
            <Button size="m" onClick={() => handleOptOut()}>
              <Text color="white">탈퇴하기</Text>
            </Button>
          </div>
        </div>
      </div>
    );
  } else if (user && user.photoURL) {
    const [profilePicture, setProfilePicture] = useState(user.photoURL);
    const handleEditPicture = async () => {
      await updateUserPicture(user.uid, profilePicture);
      await updateProfile(user, { photoURL: profilePicture });
      dispatch(setUserProfilePicture(profilePicture));
      setModal(false);
      window.location.reload();
    };

    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
    const handleFileUpload = async (e: any) => {
      if (e.target.files.length > 0) {
        const [file] = e.target.files;
        console.log(file);
        if (file) {
          try {
            setIsPending(true);
            const sheetURL = await postProfilePicture(user.uid, file);
            setProfilePicture(sheetURL);
            setIsPending(false);
          } catch (err) {
            console.log(err);
          }
          setFileName(file.name);
        } else {
          alert('이미지 파일만 업로드 가능합니다.');
        }
        dispatch(setFile(file));
      }
    };

    return (
      <div className={cx('background')}>
        <div className={cx('container')}>
          <div className={cx('closebtn')}>
            <Button size="tiny" onClick={() => setModal(false)}>
              X
            </Button>
          </div>
          <div className={cx('title')}>
            <Text size="xlg" weight="semibold">
              프로필 사진 변경하기
            </Text>
          </div>
          <div className={cx('body')}>
            <ImgLayout alt="profile-picture" size="lg" src={profilePicture} />
          </div>
          {isPending && (
            <div className={cx('loading')}>
              <div className={cx('loading-spinner')}>
                <ThreeDots width="40" height="40" color="#a5a5a5" />
              </div>
              <Text color="gray" weight="medium">
                Uploading file...
              </Text>
            </div>
          )}
          <div className={cx('footer')}>
            <Button
              theme="secondary"
              size="m"
              onClick={() => handleButtonClick()}
            >
              <Text color="black">이미지 업로드</Text>
            </Button>
            <Button size="m" onClick={() => handleEditPicture()}>
              <Text color="white">적용하기</Text>
            </Button>
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          onChange={(e) => handleFileUpload(e)}
          accept="image/*"
        />
      </div>
    );
  } else return null;
};

export default MyPageModal;
