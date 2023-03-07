import { MyPageTop } from '../../UI/organisms';
import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'firebase/auth';
import {
  ScoreList,
  TabMenu,
  MyPageModal,
  Pagination,
} from '../../UI/molecules';
import { getUserArticle, auth } from '../../../firebase/firebase';
import { DocumentData } from 'firebase/firestore/lite';
import classNames from 'classnames/bind';
import styles from './myPage.module.scss';
import Spinner from '../../../utils/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const cx = classNames.bind(styles);

type UploadedDataProps = {
  clickedTab: string;
  data: DocumentData[];
};

const UploadedData = ({ clickedTab, data }: UploadedDataProps) => {
  const filteredData = data.filter((el: DocumentData) => !el.isDeleted);

  return (
    <>
      {clickedTab === '등록한 악보' && (
        <>
          {filteredData.map((el: DocumentData, idx: number) => (
            <div className={cx('wrapper')} key={idx}>
              <ScoreList score={el} buttonEvent="edit" />
            </div>
          ))}
        </>
      )}
      {clickedTab === '구매한 악보' && (
        <>
          {filteredData.map((el: DocumentData, idx: number) => (
            <div className={cx('wrapper')} key={idx}>
              <ScoreList score={el} buttonEvent="download" />
            </div>
          ))}
        </>
      )}
    </>
  );
};

const UserData = ({
  data,
  clickedTab,
  currentPage,
  setCurrentPage,
  totalLists,
}: {
  data: DocumentData[];
  clickedTab: string;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalLists: number;
}) => {
  return (
    <>
      {data && (
        <div className={cx('container')}>
          <div className={cx('wrapper')}>
            <UploadedData clickedTab={clickedTab} data={data} />
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalLists={totalLists}
          />
        </div>
      )}
    </>
  );
};

const MyPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState<DocumentData | undefined>([]);
  const [clickedTab, setClickedTab] = useState<string>('등록한 악보');
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [editType, setEditType] = useState<'optout' | 'editPicture'>('optout');
  const [totalLists, setTotalLists] = useState(0);
  const [scores, setScores] = useState<DocumentData[]>([]);
  const { cash } = useSelector((state: RootState) => state.user.userReducer);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user as User);
      if (user && clickedTab === '등록한 악보') {
        getUserArticle(user.uid).then((el) => el && setData(el.posts));
      }
      if (user && clickedTab === '구매한 악보') {
        getUserArticle(user.uid).then(
          (el) => el && setData(el.purchasedScores)
        );
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [clickedTab]);

  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/auth');
    }
  }, [user]);

  useEffect(() => {
    let currentData: DocumentData[] = [];

    if (clickedTab === '등록한 악보') {
      setTotalLists(data?.length);
      currentData = data?.slice(
        (currentPage - 1) * 5,
        5 + (currentPage - 1) * 5
      );
      setScores(currentData);
    } else if (clickedTab === '구매한 악보') {
      setTotalLists(data?.length);
      currentData = data?.slice(
        (currentPage - 1) * 5,
        5 + (currentPage - 1) * 5
      );
      setScores(currentData);
    }
  }, [currentPage, data, clickedTab]);

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    const username = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;

    return (
      <>
        <div className={cx('background')}>
          {username && email && photoURL && (
            <>
              <MyPageTop
                username={username}
                email={email}
                photoURL={photoURL}
                cash={`${Number(cash).toLocaleString()}원`}
                setModal={setModal}
                setEditType={setEditType}
              />
              <TabMenu
                setClickedTab={setClickedTab}
                tabGroupArr={['등록한 악보', '구매한 악보']}
                setCurrentPage={setCurrentPage}
              />
              <UserData
                data={scores}
                clickedTab={clickedTab}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalLists={totalLists}
              />
            </>
          )}
        </div>
        {modal && <MyPageModal setModal={setModal} type={editType} />}
      </>
    );
  } else {
    return null;
  }
};

export default MyPage;
