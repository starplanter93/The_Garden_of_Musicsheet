import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { GlobalMenu } from '../../molecules';
import UtilityMenu from '../UtilityMenu/UtilityMenu';
import { Button, Icon, Logo, Text } from '../../atoms';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const Header = () => {
  const cx = classNames.bind(styles);
  const headerState = useSelector(
    (state: RootState) => state.headerState.isPost
  );

  if (headerState) {
    return (
      <header>
        <nav>
          <Button size="s" theme="transparent">
            <div className={cx('upload')}>
              <Icon icon="BsArrowLeft" />
              <Text>뒤로 가기</Text>
            </div>
          </Button>
          <Button size="s">
            <div className={cx('save')}>
              <Icon icon="MdOutlineCheck" color="white" />
              <Text color="white">저장하기</Text>
            </div>
          </Button>
        </nav>
      </header>
    );
  } else
    return (
      <header>
        <nav>
          <Logo type="pc" />
          <GlobalMenu />
          {/* Todo: store의 로그인 상태에 따라 분기 */}
          {true && (
            <div className={cx('login-button')}>
              {/* Todo: 로그인 버튼 Link */}
              <Button size="xs">
                <Text color="white">로그인</Text>
              </Button>
            </div>
          )}
          {false && (
            <div className={cx('utility-menu')}>
              <UtilityMenu />
            </div>
          )}
        </nav>
      </header>
    );
};

export default Header;
