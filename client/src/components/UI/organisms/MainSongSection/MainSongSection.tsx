import { memo, useMemo } from 'react';
import classNames from 'classnames/bind';
import { MainScoreList, SongTitle } from '../../molecules';
import { ScoreInfoType } from '../../../pages/Main/Main';
import styles from './mainsongsection.module.scss';

interface MainSongSectionProps {
  songTitle: string;
  singer: string;
  albumImg?: string;
  scores: ScoreInfoType[];
}

function MainSongSection({
  songTitle,
  singer,
  albumImg,
  scores,
}: MainSongSectionProps) {
  const cx = classNames.bind(styles);
  if (scores) {
    const filteredScores = useMemo(() => scores.slice(-3), [scores]);

    return (
      <section className={cx('container')}>
        <SongTitle songTitle={songTitle} singer={singer} albumImg={albumImg} />
        <div className={cx('scorelist-wrapper')}>
          {filteredScores.map((score) => (
            <MainScoreList
              key={score.scoreId}
              profileImg={score.author_profile}
              difficulty={score.difficulty}
              instrument={score.instType}
              price={score.price}
              scoreWriter={score.author}
              scoreName={score.scoreName}
              scoreId={score.scoreId}
              songTitle={songTitle}
              singer={singer}
            />
          ))}
        </div>
      </section>
    );
  } else return null;
}

export default memo(MainSongSection);
