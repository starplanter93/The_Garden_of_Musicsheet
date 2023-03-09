import React, { useState, useEffect } from 'react';
import { Text, Button, Icon } from '../../atoms';
import styles from './scorepricecard.module.scss';
import classNames from 'classnames/bind';
import { getPurchasedScores } from '../../../../firebase/firebase';
import { ScoreInfoType } from '../../../pages/Main/Main';
import { auth } from '../../../../firebase/firebase';

interface ScorePriceCardProps {
  price: string;
  scoreId: string;
  authorId: string;
  updateCart: () => void;
}

function ScorePriceCard({
  price,
  updateCart,
  scoreId,
  authorId,
}: ScorePriceCardProps) {
  const cx = classNames.bind(styles);
  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [uid, setUid] = useState<string>('');

  const formattedPrice = new Intl.NumberFormat('ko-kr').format(Number(price));

  useEffect(() => {
    setIsLoading(true);
    getPurchasedScores().then((scores) => {
      if (scores === undefined) {
        scores = [];
      }
      scores.length === 0
        ? setIsLoading(false)
        : scores.forEach((score: ScoreInfoType) => {
            if (score.scoreId === scoreId) {
              setIsLoading(false);
              setIsPurchased(true);
            } else {
              setIsLoading(false);
            }
          });
    });

    const user = auth.onAuthStateChanged((user) => {
      if (user === null) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
        setUid(user.uid);
      }
    });

    return user;
  }, [isPurchased]);

  function putScoreToCart() {
    setIsLoading(true);
    getPurchasedScores().then((scores) => {
      if (scores === undefined) {
        scores = [];
      }
      const isScoreAlreadyPurchased = scores.some(
        (score: ScoreInfoType) => score.scoreId === scoreId
      );
      if (isScoreAlreadyPurchased) {
        setIsLoading(false);
        setIsPurchased(true);
        alert('이미 구매한 악보입니다.');
      } else {
        updateCart();
        setIsLoading(false);
      }
    });
  }

  return (
    <div className={cx('price-card')}>
      <Text size="xlg" weight="bold">
        {`${formattedPrice}원`}
      </Text>
      {isLogin ? (
        isLoading ? (
          <Button size="auto" disabled={true}>
            <Text color="white">로딩중</Text>
          </Button>
        ) : uid === authorId ? (
          <Button size="auto" disabled={true}>
            <Text color="white">내가 올린 악보입니다</Text>
          </Button>
        ) : isPurchased ? (
          <Button size="auto" disabled={true}>
            <Text color="white">구매 완료</Text>
          </Button>
        ) : (
          <Button size="auto" onClick={putScoreToCart}>
            <>
              <Icon icon="MdOutlineShoppingBag" color="white" />
              <Text color="white">장바구니 담기</Text>
            </>
          </Button>
        )
      ) : (
        <Button size="auto" disabled={true}>
          <Text color="white">로그인 해주세요</Text>
        </Button>
      )}
    </div>
  );
}

export default ScorePriceCard;
