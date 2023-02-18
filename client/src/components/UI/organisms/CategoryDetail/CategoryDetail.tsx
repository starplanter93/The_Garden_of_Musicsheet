import styles from './CategoryDetail.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover, Pagination, ScoreList, TabMenu } from '../../molecules';
import { Text } from '../../atoms';
import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore/lite';
import { v4 as uuid } from 'uuid';

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
  const [clickedTab, setClickedTab] = useState('전체');
  const [tabGroupArr, setTabGroupArr] = useState<string[]>([]);

  useEffect(() => {
    let currentData: DocumentData;
    if (clickedTab === '전체') {
      currentData = scoresByCategory?.slice(currentPage - 1, currentPage + 0);
    } else {
      currentData = scoresByCategory
        ?.filter((el: DocumentData) => el.instType === clickedTab)
        .slice(currentPage - 1, currentPage + 0);
    }
    setScores(currentData);
  }, [currentPage, scoresByCategory, clickedTab]);

  useEffect(() => {
    const tabGroup: string[] = Array.from(
      new Set(scoresByCategory?.map((el: DocumentData) => el.instType))
    );
    setTabGroupArr(['전체', ...tabGroup]);
  }, [scoresByCategory]);

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
      {category === '곡' && (
        <TabMenu setClickedTab={setClickedTab} tabGroupArr={tabGroupArr} />
      )}
      <section className={cx('container')}>
        <h2>
          <Text size="xlg">악보</Text>
        </h2>
        <div className={cx('score-lists')}>
          {scores?.map((score: DocumentData) => (
            <ScoreList score={score} key={uuid()} />
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
