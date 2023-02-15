import styles from './CategoryDetail.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover, Pagination, ScoreList } from '../../molecules';
import { Text } from '../../atoms';
import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore/lite';

interface CategoryDetailProps {
  scoresByInst: DocumentData;
  totalLists: number;
}

const CategoryDetail = ({ scoresByInst, totalLists }: CategoryDetailProps) => {
  const cx = classNames.bind(styles);
  const { thumbnail, name, scores } = scoresByInst;
  const [scoresData, setScoresData] = useState<DocumentData>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const currentData = scores?.slice(currentPage - 1, currentPage + 0);
    setScoresData(currentData);
  }, [currentPage, scoresByInst]);

  return (
    <>
      <div className={cx('cover-wrapper')}>
        <CategoryCover category="악기" thumbnail={thumbnail} title={name} />
      </div>
      <section className={cx('container')}>
        <h2>
          <Text size="xlg">악보</Text>
        </h2>
        <div className={cx('score-lists')}>
          {scoresData?.map((score: DocumentData, idx: number) => (
            <ScoreList score={score} key={idx} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalLists={totalLists}
        />
      </section>
    </>
  );
};

export default CategoryDetail;
