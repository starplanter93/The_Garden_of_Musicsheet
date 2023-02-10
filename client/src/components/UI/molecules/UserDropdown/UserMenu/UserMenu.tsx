import styles from './userMenu.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../../atoms';
import { useDispatch } from 'react-redux';
import { setHeader } from '../../../../../redux/HeaderSlice';
import { auth } from '../../../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../../../../../redux/store';

const UserMenu = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await auth.signOut();
    await persistor.purge();
    location.reload();
  };

  const handleUpload = () => {
    dispatch(setHeader(true));
    navigate('/postmusic');
  };

  return (
    <div className={cx('usermenu-wrapper')}>
      <ul>
        <li>
          <Button
            theme="transparent"
            size="auto"
            onClick={() => handleUpload()}
          >
            <>
              <Icon icon="MdOutlineUploadFile" size="s" />
              <Text>악보 업로드</Text>
            </>
          </Button>
        </li>
        <li>
          <Button
            theme="transparent"
            size="auto"
            onClick={() => navigate('/mypage')}
          >
            <>
              <Icon icon="CgUserList" size="s" />
              <Text>마이페이지</Text>
            </>
          </Button>
        </li>
        <li>
          <Button
            theme="transparent"
            size="auto"
            onClick={() => handleSignOut()}
          >
            <>
              <Icon icon="MdLogout" size="s" />
              <Text>로그아웃</Text>
            </>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
