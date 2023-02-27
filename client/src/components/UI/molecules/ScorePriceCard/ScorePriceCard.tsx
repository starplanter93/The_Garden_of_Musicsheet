import React, { useState, useEffect } from 'react';
import { Text, Button, Icon } from '../../atoms';
import styles from './scorepricecard.module.scss';
import classNames from 'classnames/bind';
import { getPurchasedScores } from '../../../../firebase/firebase';
import { ScoreInfoType } from '../../../pages/Main/Main';
import { LoadingSpinner } from '../../atoms';

interface ScorePriceCardProps {
  price: string;
  scoreId: string;
  updateCart: () => void;
}

function ScorePriceCard({ price, updateCart, scoreId }: ScorePriceCardProps) {
  const cx = classNames.bind(styles);
  const [isPurchased, setIsPurchased] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const formattedPrice = new Intl.NumberFormat('ko-kr').format(Number(price));

  useEffect(() => {
    setIsLoading(true);
    getPurchasedScores().then((scores) => {
      scores.forEach((score: ScoreInfoType) => {
        if (score.scoreId === scoreId) {
          setIsLoading(false);
          setIsPurchased(true);
        } else {
          setIsLoading(false);
        }
      });
    });
  }, []);

  return (
    <div className={cx('price-card')}>
      <Text size="xlg" weight="bold">
        {`${formattedPrice}원`}
      </Text>
      {isLoading ? (
        <LoadingSpinner />
      ) : isPurchased ? (
        <Button disabled={true}>
          <Text color="white">구매 완료</Text>
        </Button>
      ) : (
        <Button size="auto" onClick={updateCart}>
          <>
            <Icon icon="MdOutlineShoppingBag" color="white" />
            <Text color="white">장바구니 담기</Text>
          </>
        </Button>
      )}
    </div>
  );
}

export default ScorePriceCard;
