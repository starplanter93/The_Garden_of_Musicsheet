import styles from './globalmenu.module.scss';
import classNames from 'classnames/bind';
import { Icon, Text } from '../../../atoms';
import { Link, useLocation } from 'react-router-dom';

const GlobalMenu = () => {
  const cx = classNames.bind(styles);
  const { pathname } = useLocation();

  return (
    <ul className={cx('menu-lists')}>
      <li className={cx('menu-list', pathname === '/' && 'active')}>
        <Link to="/">
          <Icon icon="MdOutlineQueueMusic" size="m" color="gray" />
          <Text size="lg" color="gray">
            곡
          </Text>
        </Link>
      </li>
      <li className={cx('menu-list', pathname === '/instrument' && 'active')}>
        <Link to="/instrument">
          <Icon icon="MdPiano" size="s" color="gray" />
          <Text size="lg" color="gray">
            악기
          </Text>
        </Link>
      </li>
    </ul>
  );
};

export default GlobalMenu;
