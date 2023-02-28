import { MyPageTop } from '../../UI/organisms';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'firebase/auth';
import {
  ScoreList,
  TabMenu,
  MyPageModal,
  Pagination,
} from '../../UI/molecules';
import { getUserArticle, auth, getUserCash } from '../../../firebase/firebase';
import { DocumentData } from 'firebase/firestore/lite';
import classNames from 'classnames/bind';
import styles from './myPage.module.scss';
import Spinner from '../../../utils/Spinner/Spinner';
const cx = classNames.bind(styles);

type UploadedDataProps = {
  clickedTab: '등록한 악보' | '구매한 악보';
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
          {data.map((el: DocumentData, idx: number) => (
            <div className={cx('wrapper')} key={idx}>
              <ScoreList score={el} buttonEvent="download" />
            </div>
          ))}
        </>
      )}
    </>
  );
};

const UserData = ({ data, clickedTab, currentPage, setCurrentPage }: any) => {
  return (
    <>
      {data && (
        <>
          <div className={cx('container')}>
            <div className={cx('wrapper')}>
              <UploadedData clickedTab={clickedTab} data={data} />
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalLists={data.length}
            />
          </div>
        </>
      )}
    </>
  );
};

const MyPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState<DocumentData | undefined>([]);
  const [clickedTab, setClickedTab] = useState('등록한 악보');
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [cash, setCash] = useState('');
  const [editType, setEditType] = useState<'optout' | 'editPicture'>('optout');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user as User);
      if (user) {
        getUserArticle(user.uid).then((el) => el && setData(el.posts));
        getUserCash(user.uid).then((el) => el && setCash(el.cash));
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('authorization')) {
      navigate('/auth');
    }
  }, [user]);

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
                data={data}
                clickedTab={clickedTab}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
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
