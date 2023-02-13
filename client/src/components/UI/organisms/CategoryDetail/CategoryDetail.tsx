import styles from './CategoryDetail.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover, ScoreList } from '../../molecules';
import { Text } from '../../atoms';

// Todo: 데이터 연결
const CategoryDetail = () => {
  const cx = classNames.bind(styles);

  return (
    <>
      <div className={cx('cover-wrapper')}>
        <CategoryCover category="악기" thumbnail="piano" title="피아노" />
      </div>
      <section className={cx('container')}>
        <h2>
          <Text size="xlg">악보</Text>
        </h2>
        <div className={cx('score-lists')}>
          {Array(10)
            .fill(0)
            .map((el, idx) => (
              <ScoreList key={idx} />
            ))}
        </div>
        {/* 페이지네이션 */}
      </section>
    </>
  );
};

export default CategoryDetail;
