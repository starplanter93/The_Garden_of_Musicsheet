import React from 'react';
import { MainScoreList, SongTitle } from '../../molecules';
import styles from './mainsongsection.module.scss';
import classNames from 'classnames/bind';

interface MainSongSectionProps {
  songTitle: string;
  singer: string;
  albumImg: string;
  scoreName: string;
  scoreWriter: string;
  profileImg: string;
  instrument: string;
  difficulty: string;
  price: string;
}

function MainSongSection({
  songTitle,
  singer,
  albumImg,
  scoreName,
  scoreWriter,
  profileImg,
  instrument,
  difficulty,
  price,
}: MainSongSectionProps) {
  const cx = classNames.bind(styles);
  return (
    <section className={cx('container')}>
      <SongTitle songTitle={songTitle} singer={singer} albumImg={albumImg} />
      <div className={cx('scorelist-wrapper')}>
        <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
      </div>
    </section>
  );
}

export default MainSongSection;
