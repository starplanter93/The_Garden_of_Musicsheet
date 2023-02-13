import styles from './globalmenu.module.scss';
import classNames from 'classnames/bind';
import { Icon, Text } from '../../../atoms';
import { Link } from 'react-router-dom';

const GlobalMenu = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('menu-lists')}>
      <li className={cx('menu-list')}>
        <Link to="/">
          <Icon icon="MdOutlineQueueMusic" />
          <Text size="lg">곡</Text>
        </Link>
      </li>
      <li className={cx('menu-list')}>
        <Link to="/instrument">
          <Icon icon="MdPiano" size="s" />
          <Text size="lg">악기</Text>
        </Link>
      </li>
    </ul>
  );
};

export default GlobalMenu;
