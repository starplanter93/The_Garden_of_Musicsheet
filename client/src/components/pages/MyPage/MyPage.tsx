import { MyPageTop } from '../../UI/organisms';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/firebase';
import { User } from 'firebase/auth';
import { ScoreList, TabMenu } from '../../UI/molecules';
import { getUserArticle } from '../../../firebase/firebase';
import { DocumentData } from 'firebase/firestore/lite';
import classNames from 'classnames/bind';
import styles from './myPage.module.scss';
import Spinner from '../../../utils/Spinner/Spinner';
import OptOutModal from '../../UI/molecules/OptOutModal/OptOutModal';

const MyPage = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [data, setData] = useState<DocumentData | undefined>([]);
  const [clickedTab, setClickedTab] = useState('등록한 악보');
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user as User);
      if (user) {
        getUserArticle(user.uid).then((el) => el && setData(el.posts));
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

  const UserData = () => {
    if (data && clickedTab === '등록한 악보') {
      return (
        <div className={cx('container')}>
          <div className={cx('wrapper')}>
            {data.map((el: DocumentData, idx: number) => (
              <div className={cx('wrapper')} key={idx}>
                <ScoreList score={el} buttonEvent="edit" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (data && clickedTab === '구매한 악보') {
      return (
        <div className={cx('container')}>
          <div className={cx('wrapper')}>
            {data.map((el: DocumentData, idx: number) => (
              <div className={cx('wrapper')} key={idx}>
                <ScoreList score={el} buttonEvent="download" />
              </div>
            ))}
          </div>
        </div>
      );
    } else return null;
  };

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
                cash="100,000"
                setModal={setModal}
              />
              <TabMenu
                setClickedTab={setClickedTab}
                tabGroupArr={['등록한 악보', '구매한 악보']}
                setCurrentPage={setCurrentPage}
              />
              <UserData />
            </>
          )}
        </div>
        {modal && <OptOutModal setModal={setModal} />}
      </>
    );
  } else {
    return null;
  }
};

export default MyPage;
