import { Button, Text } from '../../../atoms';
import classNames from 'classnames/bind';
import styles from './postButtons.module.scss';

const PostButtons = () => {
  const cx = classNames.bind(styles);
  return (
    <div>
      <div className={cx('text')}>
        <Text weight="semibold" size="xlg">
          악보 정보
        </Text>
      </div>
      <div>
        <div className={cx('h2')}>
          <Text weight="regular" size="m">
            악기 종류
          </Text>
          <Text size="xlg" color="red">
            *
          </Text>
        </div>
        <div className={cx('buttons')}>
          <Button size="s" theme="toggle">
            피아노
          </Button>
          <Button size="s" theme="toggle">
            일렉 기타
          </Button>
          <Button size="s" theme="toggle">
            어쿠스틱 기타
          </Button>
          <Button size="s" theme="toggle">
            베이스
          </Button>
          <Button size="s" theme="toggle">
            드럼
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostButtons;
