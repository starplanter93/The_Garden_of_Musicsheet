import styles from './CategoryDetail.module.scss';
import classNames from 'classnames/bind';
import { CategoryCover, Pagination, ScoreList, TabMenu } from '../../molecules';
import { Text } from '../../atoms';
import { useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore/lite';
import { v4 as uuid } from 'uuid';
import { ScoreInfoType } from '../../../pages/Main/Main';

interface CategoryDetailProps {
  category: string;
  coverData: DocumentData;
  scoresByCategory: DocumentData;
}

const CategoryDetail = ({
  category,
  coverData,
  scoresByCategory,
}: CategoryDetailProps) => {
  const cx = classNames.bind(styles);
  const { thumbnail, name, artist } = coverData;
  const [scores, setScores] = useState<DocumentData>([]);
  const [totalLists, setTotalLists] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [clickedTab, setClickedTab] = useState('전체');
  const [tabGroupArr, setTabGroupArr] = useState<string[]>([]);

  useEffect(() => {
    scoresByCategory = scoresByCategory
      .filter((el: ScoreInfoType) => !el.isDeleted)
      .filter((el: ScoreInfoType) => !el.isOptout);
    let currentData: DocumentData;
    if (clickedTab === '전체') {
      setTotalLists(scoresByCategory?.length);
      currentData = scoresByCategory?.slice(
        (currentPage - 1) * 5,
        5 + (currentPage - 1) * 5
      );
    } else {
      const filteredData: DocumentData = scoresByCategory?.filter(
        (el: DocumentData) => el.instType === clickedTab
      );
      setTotalLists(filteredData.length);
      currentData = filteredData.slice(
        (currentPage - 1) * 5,
        5 + (currentPage - 1) * 5
      );
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
        <TabMenu
          setClickedTab={setClickedTab}
          tabGroupArr={tabGroupArr}
          setCurrentPage={setCurrentPage}
        />
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
