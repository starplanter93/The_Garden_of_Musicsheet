import classNames from 'classnames/bind';
import { ImgLayout, Text } from '../../atoms';
import styles from './categoryCover.module.scss';

interface CategoryCoverProps {
  category: string;
  thumbnail: string;
  title: string;
  artist: string;
}

const CategoryCover = ({
  category,
  thumbnail,
  title,
  artist,
}: CategoryCoverProps) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('category-cover')}>
      <div className={cx('cover-img')}>
        <ImgLayout shape="square" size="lg" src={thumbnail} alt="커버 이미지" />
      </div>
      <div className={cx('cover-info')}>
        <ul>
          <li className={cx('info-category')}>
            <Text size="lg">{category}</Text>
          </li>
          <li className={cx('info-title')}>
            <Text size="txlg" weight="bold">
              {title}
            </Text>
          </li>
          <li className={cx('info-artist')}>
            <Text size="lg" color="gray">
              {artist}
            </Text>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryCover;
