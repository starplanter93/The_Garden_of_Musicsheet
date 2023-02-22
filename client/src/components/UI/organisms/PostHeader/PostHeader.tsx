import styles from './postheader.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../atoms';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useNavigate } from 'react-router-dom';
import { auth, getMusicData } from '../../../../firebase/firebase';
import { setUserInfo, initializeState } from '../../../../redux/PostSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const PostHeader = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.postInfo);
  const pdf = useSelector((state: RootState) => state.pdfFile);

  const handleIsPost = () => {
    dispatch(initializeState());
    navigate(-1);
  };

  useEffect(() => {
    if (auth.currentUser) {
      const user = [
        auth.currentUser.displayName,
        auth.currentUser.uid,
        auth.currentUser.photoURL,
      ];
      dispatch(setUserInfo(user));
    }
  }, [data]);

  const validateInputs = () => {
    const { songName, artist, albumImg, scores } = data;
    if (
      !songName ||
      !artist ||
      !albumImg ||
      !scores[0].instType ||
      !scores[0].difficulty ||
      !scores[0].sheetType ||
      !scores[0].detail ||
      !scores[0].price ||
      !pdf
    ) {
      return false;
    }
    return true;
  };

  const handleUpload = async () => {
    if (!validateInputs()) {
      toast.error('모든 필드를 입력해주세요.');
    } else {
      await getMusicData(data.songName, data).then(() => navigate('/'));
      dispatch(initializeState());
      toast.success('악보 등록 성공!');
    }
  };

  return (
    <header>
      <nav className={cx('nav-post')}>
        <Button size="s" theme="transparent" onClick={() => handleIsPost()}>
          <div className={cx('upload')}>
            <Icon icon="BsArrowLeft" />
            <Text>뒤로 가기</Text>
          </div>
        </Button>
        <Button size="s" onClick={() => handleUpload()}>
          <div className={cx('save')}>
            <Icon icon="MdOutlineCheck" color="white" />
            <Text color="white">저장하기</Text>
          </div>
        </Button>
      </nav>
    </header>
  );
};

export default PostHeader;
