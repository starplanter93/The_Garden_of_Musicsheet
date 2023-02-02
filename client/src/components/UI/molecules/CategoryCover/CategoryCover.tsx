import classNames from 'classnames/bind';
import { ImgLayout, Text } from '../../atoms';
import styles from './categoryCover.module.scss';

const CategoryCover = () => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('category-cover')}>
      <div className={cx('cover-img')}>
        <ImgLayout shape="square" size="lg" alt="커버 이미지" />
      </div>
      <div className={cx('cover-info')}>
        <ul>
          <li className={cx('info-category')}>
            <Text size="lg">곡</Text>
          </li>
          <li className={cx('info-title')}>
            <Text size="txlg" weight="bold">
              사건의 지평선
            </Text>
          </li>
          <li className={cx('info-artist')}>
            <Text size="lg" color="gray">
              윤하
            </Text>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryCover;
