import styles from './header.module.scss';
import classNames from 'classnames/bind';
import { GlobalMenu } from '../../molecules';
import UtilityMenu from '../UtilityMenu/UtilityMenu';
import { Button, Logo, Text } from '../../atoms';

const Header = () => {
  const cx = classNames.bind(styles);
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
