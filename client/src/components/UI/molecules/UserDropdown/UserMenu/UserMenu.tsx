import styles from './userMenu.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../../atoms';
import { useDispatch } from 'react-redux';
import { headerState } from '../../../../../redux/HeaderSlice';
// Todo: Link
const UserMenu = () => {
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  return (
    <div className={cx('usermenu-wrapper')}>
      <ul>
        <li>
          <Button
            theme="transparent"
            size="auto"
            onClick={() => dispatch(headerState())}
          >
            <>
              <Icon icon="MdOutlineUploadFile" size="s" />
              <Text>악보 업로드</Text>
            </>
          </Button>
        </li>
        <li>
          <Button theme="transparent" size="auto">
            <>
              <Icon icon="CgUserList" size="s" />
              <Text>마이페이지</Text>
            </>
          </Button>
        </li>
        <li>
          <Button theme="transparent" size="auto">
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
