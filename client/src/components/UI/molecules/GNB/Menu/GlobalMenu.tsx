import styles from './globalmenu.module.scss';
import classNames from 'classnames/bind';
import { Icon, Text } from '../../../atoms';
import { Link } from 'react-router-dom';

// Todo: active 클래스명 붙이는 조건 추가
const GlobalMenu = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('menu-lists')}>
      <li className={cx('menu-list', 'active')}>
        <Link to="/">
          <Icon icon="MdOutlineQueueMusic" size="m" color="gray" />
          <Text size="lg" color="gray">
            곡
          </Text>
        </Link>
      </li>
      <li className={cx('menu-list')}>
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
