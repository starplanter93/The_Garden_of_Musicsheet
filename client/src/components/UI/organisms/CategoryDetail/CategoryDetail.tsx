import styles from './CategoryDetail.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover, Pagination, ScoreList } from '../../molecules';
import { Text } from '../../atoms';
import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore/lite';

interface CategoryDetailProps {
  category: string;
  coverData: DocumentData;
  scoresByCategory: DocumentData;
  totalLists: number;
}

const CategoryDetail = ({
  category,
  coverData,
  scoresByCategory,
  totalLists,
}: CategoryDetailProps) => {
  const cx = classNames.bind(styles);
  const { thumbnail, name, artist } = coverData;
  const [scores, setScores] = useState<DocumentData>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const currentData = scoresByCategory?.slice(
      currentPage - 1,
      currentPage + 0
    );
    setScores(currentData);
  }, [currentPage, scoresByCategory]);

  return (
    <>
      <div className={cx('cover-wrapper')}>
        <CategoryCover
          category={category}
          thumbnail={thumbnail}
          title={name}
          artist={artist}
        />
      </div>
      <section className={cx('container')}>
        <h2>
          <Text size="xlg">악보</Text>
        </h2>
        <div className={cx('score-lists')}>
          {scores?.map((score: DocumentData, idx: number) => (
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
