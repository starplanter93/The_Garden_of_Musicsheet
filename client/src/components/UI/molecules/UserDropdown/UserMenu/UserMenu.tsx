import styles from './userMenu.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../../atoms';
import { auth } from '../../../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../../../../../redux/store';
import { Dispatch, SetStateAction } from 'react';

interface UserMenuProps {
  setDropdown?: Dispatch<SetStateAction<boolean>>;
}

const UserMenu = ({ setDropdown }: UserMenuProps) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    if (confirm('정말 로그아웃하시겠습니까?🥺')) {
      await auth.signOut();
      await persistor.purge();
      location.reload();
    }
  };

  const handleUpload = () => {
    navigate('/scores/post');
  };

  const handleMyPage = () => {
    if (setDropdown) setDropdown(false);
    navigate('/mypage');
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
            onClick={() => handleMyPage()}
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
