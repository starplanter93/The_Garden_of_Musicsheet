import React from 'react';
import { Text, Icon } from '../../atoms';
import classNames from 'classnames/bind';
import styles from './scoreinfocard.module.scss';

interface ScoreInfoCardProps {
  instrument: string;
  difficulty: string;
  page: string;
  scoreType: string;
}

function ScoreInfoCard({
  instrument,
  difficulty,
  page,
  scoreType,
}: ScoreInfoCardProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('scoreinfo-wrapper')}>
      <div className={cx('scoreinfo-item')}>
        <Icon icon="MdPiano" color="gray" />
        <div className={cx('text-wrapper')}>
          <Text color="gray">악기</Text>
          <Text weight="semibold">{instrument}</Text>
        </div>
      </div>
      <div className={cx('scoreinfo-item')}>
        <Icon icon="BsFillBarChartFill" color="gray" />
        <div className={cx('text-wrapper')}>
          <Text color="gray">난이도</Text>
          <Text weight="semibold">{difficulty}</Text>
        </div>
      </div>
      <div className={cx('scoreinfo-item')}>
        <Icon icon="MdMenuBook" color="gray" />
        <div className={cx('text-wrapper')}>
          <Text color="gray">페이지</Text>
          <Text weight="semibold">{page}</Text>
        </div>
      </div>
      <div className={cx('scoreinfo-item')}>
        <Icon icon="BsMusicNoteBeamed" color="gray" />
        <div className={cx('text-wrapper')}>
          <Text color="gray">악보 종류</Text>
          <Text weight="semibold">{scoreType}</Text>
        </div>
      </div>
    </div>
  );
}

export default ScoreInfoCard;
