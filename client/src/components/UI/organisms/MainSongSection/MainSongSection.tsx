import React from 'react';
import { MainScoreList, SongTitle } from '../../molecules';
import styles from './mainsongsection.module.scss';
import classNames from 'classnames/bind';

interface MainSongSectionProps {
  songTitle: string;
  singer: string;
  scoreName: string;
  scoreWriter: string;
  instrument: string;
  difficulty: string;
  price: string;
}

function MainSongSection({
  songTitle,
  singer,
  scoreName,
  scoreWriter,
  instrument,
  difficulty,
  price,
}: MainSongSectionProps) {
  const cx = classNames.bind(styles);
  return (
    <section>
      <SongTitle songTitle={songTitle} singer={singer} />
      <div className={cx('scorelist-wrapper')}>
        <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
      </div>
    </section>
  );
}

export default MainSongSection;
