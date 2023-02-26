import React, { useEffect, useState } from 'react';
import { ScoreInfoHeader } from '../../UI/molecules';
import { ScoreInfoAside, ScoreInfoMain } from '../../UI/organisms';
import styles from './scoreInfo.module.scss';
import classNames from 'classnames/bind';
import { getScoreByMusic } from '../../../firebase/firebase';
import { useParams } from 'react-router';
import { ScoreInfoType } from '../Main/Main';
import { LoadingSpinner } from '../../UI/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItems } from '../../../redux/ModalSlice';
import { RootState } from '../../../redux/store';
import { updateCart } from '../../../firebase/firebase';

function ScoreInfo() {
  const cx = classNames.bind(styles);
  const [scoreData, setScoreData] = useState<ScoreInfoType>();
  const { scoreName, scoreId } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state: RootState) => state.modalState
  ).cartItems;
  const dummyData = {
    scoreImg1:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%231.png?alt=media&token=5f6f761a-104d-4317-ad8d-03feb5c018fb',
    scoreImg2:
      'https://firebasestorage.googleapis.com/v0/b/garden-of-musicsheet.appspot.com/o/if%20i%20could%20be%20a%20constellation%232.png?alt=media&token=7338efea-878a-4762-a0a7-1d121e405a24',
    page: '7',
  };

  function updateCartItem() {
    // if (scoreData) {
    //   const existingItem = cartItems.find(
    //     (item) => item.scoreName === scoreData.scoreName
    //   );
    //   if (existingItem) {
    //     alert('이미 장바구니에 들어 있습니다.');
    //   } else {
    //     dispatch(updateCartItems(scoreData));
    //     alert('장바구니에 추가되었습니다.');
    //   }
    // }
    if (scoreData) {
      updateCart('XmX1jT6EOZgQrM66Ppq6nKz1lCA2', scoreData);
    }
  }

  async function fetchScoreData() {
    if (scoreName && scoreId) {
      const [data] = await getScoreByMusic(scoreName, scoreId);
      setScoreData(data);
    }
  }

  useEffect(() => {
    fetchScoreData();
  }, []);

  if (scoreData === undefined) {
    return <LoadingSpinner />;
  }

  return (
    <div className={cx('scoreinfo')}>
      <div>
        <ScoreInfoHeader
          scoreName={scoreData.scoreName}
          singer={scoreData.artist}
          date={scoreData.createdAt}
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
        profileImg={scoreData.author_profile}
        updateCart={updateCartItem}
      />
      <aside></aside>
    </div>
  );
}

export default ScoreInfo;
