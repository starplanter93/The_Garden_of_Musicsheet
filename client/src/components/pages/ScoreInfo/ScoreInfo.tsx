import React, { useEffect, useState } from 'react';
import { ScoreInfoHeader } from '../../UI/molecules';
import { ScoreInfoAside, ScoreInfoMain } from '../../UI/organisms';
import styles from './scoreInfo.module.scss';
import classNames from 'classnames/bind';
import { getScoreByMusic } from '../../../firebase/firebase';
import { useParams } from 'react-router';
import { ScoreInfoType } from '../Main/Main';
import { LoadingSpinner } from '../../UI/atoms';
import { updateCart, getCart } from '../../../firebase/firebase';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { countCartItem } from '../../../redux/ModalSlice';
import { auth } from '../../../firebase/firebase';
import { useNavigate } from 'react-router';
import { User } from 'firebase/auth';

function ScoreInfo() {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const [scoreData, setScoreData] = useState<ScoreInfoType>();
  const [user, setUser] = useState<User | null>(null);
  const { scoreName, scoreId } = useParams();
  const dispatch = useDispatch();
  const dummyData = {
    scoreImg1:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%231.png?alt=media&token=5f6f761a-104d-4317-ad8d-03feb5c018fb',
    scoreImg2:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%232.png?alt=media&token=7338efea-878a-4762-a0a7-1d121e405a24',
    page: '7',
  };

  const notify = () =>
    toast('장바구니에 추가되었습니다.', {
      autoClose: 300,
      closeOnClick: true,
      pauseOnHover: false,
      type: 'success',
    });

  function updateCartItem() {
    auth.onAuthStateChanged((user) => {
      if (!user || !scoreData) {
        return;
      }
      getCart(user.uid).then((data) => {
        const cartItems = data?.cartItems || [];
        if (
          cartItems.find(
            (item: ScoreInfoType) => item.scoreId === scoreData.scoreId
          )
        ) {
          alert('이미 장바구니에 있는 악보입니다.');
          return;
        }
        updateCart(scoreData).then((updatedData) => {
          if (updatedData) {
            dispatch(countCartItem(updatedData.cartItems.length));
            notify();
          }
        });
      });
    });
  }

  async function fetchScoreData() {
    if (scoreName && scoreId) {
      const [data] = await getScoreByMusic(scoreName, scoreId);
      if (data.isDeleted) {
        toast.error('삭제된 게시글이에요');
        navigate('/');
      } else {
        setScoreData(data);
      }
    }
  }

  useEffect(() => {
    fetchScoreData();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user as User);
    });
    return unsubscribe;
  }, []);

  if (scoreData === undefined) {
    return <LoadingSpinner />;
  }

  return (
    <div className={cx('scoreinfo')}>
      {scoreData && (
        <>
          <div>
            <ScoreInfoHeader
              scoreName={scoreData.scoreName}
              singer={scoreData.artist}
              date={scoreData.createdAt}
              authorId={scoreData.authorId}
              uid={user?.uid}
            />
            <ScoreInfoMain
              scoreImg1={dummyData.scoreImg1}
              scoreImg2={dummyData.scoreImg2}
              instrument={scoreData.instType}
              difficulty={scoreData.difficulty}
              page={dummyData.page}
              scoreType={scoreData.sheetType}
              scoreExplain={scoreData.detail}
              youtubeURL={scoreData.youtubeURL}
            />
          </div>
          <ScoreInfoAside
            price={scoreData.price}
            author={scoreData.author}
            authorId={scoreData.authorId}
            profileImg={scoreData.author_profile}
            updateCart={updateCartItem}
            scoreId={scoreData.scoreId}
          />
          <aside></aside>
        </>
      )}
    </div>
  );
}

export default ScoreInfo;
