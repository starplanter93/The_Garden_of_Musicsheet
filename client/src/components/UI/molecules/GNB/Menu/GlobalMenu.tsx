import styles from './globalmenu.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../../atoms';

// Todo: active 클래스명 붙이는 조건 추가
const GlobalMenu = () => {
  const cx = classNames.bind(styles);

  return (
    <ul className={cx('menu-lists')}>
      <li className={cx('menu-list', 'active')}>
        <Button theme="transparent" size="auto">
          <>
            <Icon icon="MdOutlineQueueMusic" size="m" color="gray" />
            <Text size="lg" color="gray">
              곡
            </Text>
          </>
        </Button>
      </li>
      <li className={cx('menu-list')}>
        <Button theme="transparent" size="auto">
          <>
            <Icon icon="MdPiano" size="s" color="gray" />
            <Text size="lg" color="gray">
              악기
            </Text>
          </>
        </Button>
      </li>
    </ul>
  );
};

export default GlobalMenu;
