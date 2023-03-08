import MainSongSection from '../MainSongSection/MainSongSection';
import { Text } from '../../atoms';
import styles from './maingrid.module.scss';
import classNames from 'classnames/bind';
import { MusicData } from '../../../pages/Main/Main';
import { v4 as uuidv4 } from 'uuid';

function MainGrid({ musicData }: { musicData: MusicData }) {
  const cx = classNames.bind(styles);
  if (musicData) {
    const validData = musicData.filter((data) => !data.isDeleted);
    return (
      <div className={cx('main-content-wrapper')}>
        <div className={cx('main-content-grid')}>
          <h1 className={cx('main-content-header')}>
            <Text size="xlg" weight="semibold">
              곡
            </Text>
          </h1>
          {validData.map((data) => (
            <MainSongSection
              key={uuidv4()}
              songTitle={data.songName}
              singer={data.artist}
              albumImg={data.albumImg}
              scores={data.scores.filter((el) => !el.isDeleted && !el.isOptout)}
            />
          ))}
        </div>
      </div>
    );
  } else return null;
}

export default MainGrid;
