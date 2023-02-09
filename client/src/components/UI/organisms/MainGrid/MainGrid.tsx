import React from 'react';
import MainSongSection from '../MainSongSection/MainSongSection';
import { Text } from '../../atoms';
import styles from './maingrid.module.scss';
import classNames from 'classnames/bind';

interface MainGridProps {
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

function MainGrid({
  songTitle,
  singer,
  albumImg,
  scoreName,
  scoreWriter,
  profileImg,
  instrument,
  difficulty,
  price,
}: MainGridProps) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('main-content-wrapper')}>
      <div className={cx('main-content-grid')}>
        <h1 className={cx('main-content-header')}>
          <Text size="xlg" weight="semibold">
            곡
          </Text>
        </h1>
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainSongSection
          songTitle={songTitle}
          singer={singer}
          albumImg={albumImg}
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
      </div>
    </div>
  );
}

export default MainGrid;
