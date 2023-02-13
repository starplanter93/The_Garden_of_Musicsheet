import styles from './pagination.module.scss';
import classNames from 'classnames/bind';
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Icon } from '../../atoms';

interface PaginationProps {
  totalLists?: number;
  currentPage?: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  totalLists = 60,
  currentPage = 7,
  setCurrentPage,
}: PaginationProps) => {
  const cx = classNames.bind(styles);
  const listPerpage = 5;
  const totalPages = Math.ceil(totalLists / listPerpage);
  const totalPageArr = Array(totalPages)
    .fill(1)
    .map((el, idx) => el + idx);
  const [pageGroup, setPageGroup] = useState<number[]>([]);
  const prevActive = pageGroup[0] !== 1;
  const nextActive = pageGroup[pageGroup.length - 1] < totalPages;

  useEffect(() => {
    const pageGroupArr = totalPageArr.slice(
      currentPage - 1 - ((currentPage - 1) % 5),
      currentPage - 1 - ((currentPage - 1) % 5) + 5
    );
    setPageGroup([...pageGroupArr]);
  }, [totalPages]);

  const handlePrev = () => {
    if (!prevActive) return;

    // setIsPending(true);
    // setCurrentPage(pageGroup[0] - 5);
  };

  const handlePage = (e: MouseEvent<HTMLButtonElement>) => {
    if (Number((e.target as HTMLButtonElement).value) === currentPage) return;
    // setIsPending(true);
    // setCurrentPage(Number((e.target as HTMLButtonElement).value));
  };

  const handleNext = () => {
    if (!nextActive) return;

    // setIsPending(true);
    // setCurrentPage(pageGroup[0] + 5);
  };

  return (
    <div className={cx('buttons')}>
      <button
        className={cx('prev', prevActive && 'active')}
        onClick={handlePrev}
        disabled={!prevActive}
      >
        <Icon icon="MdKeyboardArrowLeft" color="gray" />
      </button>
      {pageGroup.map((el, idx) => (
        <button
          className={cx('page', el === currentPage && 'active')}
          key={idx}
          value={el}
          onClick={handlePage}
        >
          {el}
        </button>
      ))}
      <button
        className={cx('next', nextActive && 'active')}
        onClick={handleNext}
        disabled={!nextActive}
      >
        <Icon icon="MdKeyboardArrowRight" color="gray" />
      </button>
    </div>
  );
};

export default Pagination;
