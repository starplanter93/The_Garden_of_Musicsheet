import { MainScoreList, SongTitle } from '../../molecules';
import styles from './mainsongsection.module.scss';
import classNames from 'classnames/bind';
import { ScoreInfoType } from '../../../pages/Main/Main';

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
  if (scores) scores = scores.slice(-3);
  return (
    <section className={cx('container')}>
      <SongTitle songTitle={songTitle} singer={singer} albumImg={albumImg} />
      <div className={cx('scorelist-wrapper')}>
        {scores &&
          scores.map((el, idx) => {
            if (idx < 3) {
              return (
                <MainScoreList
                  key={el.scoreId}
                  profileImg={el.author_profile}
                  difficulty={el.difficulty}
                  instrument={el.instType}
                  price={el.price}
                  scoreWriter={el.author}
                  scoreName={el.scoreName}
                  scoreId={el.scoreId}
                  songTitle={songTitle}
                  singer={singer}
                />
              );
            }
          })}
      </div>
    </section>
  );
}

export default MainSongSection;
