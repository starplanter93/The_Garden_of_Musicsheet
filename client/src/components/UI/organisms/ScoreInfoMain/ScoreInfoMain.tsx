import React from 'react';
import { ScorePreview, ScoreInfoCard, ScoreInfoExplain } from '../../molecules';
import styles from './scoreInfoMain.module.scss';
import classNames from 'classnames/bind';
import YouTube, { YouTubeProps } from 'react-youtube';

interface ScoreInfoMainProps {
  scoreImg1: string;
  scoreImg2: string;
  instrument: string;
  difficulty: string;
  page: string;
  scoreType: string;
  scoreExplain: string;
  youtubeURL: string;
}

function ScoreInfoMain({
  scoreImg1,
  scoreImg2,
  instrument,
  difficulty,
  page,
  scoreType,
  scoreExplain,
  youtubeURL,
}: ScoreInfoMainProps) {
  const cx = classNames.bind(styles);

  function extractVideoID(url: string) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#]*).*/;
    const match = url.match(regExp);
    if (match && match[7].length === 11) {
      return match[7];
    }
  }

  const formattedURL = extractVideoID(youtubeURL);

  const onPlayerReady: YouTubeProps['onReady'] = (e) => {
    e.target.stopVideo();
  };

  const onPlayerEnd: YouTubeProps['onEnd'] = (e) => {
    e.target.stopVideo(0);
  };

  const opts: YouTubeProps['opts'] = {
    width: '700',
    height: '400',
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return (
    <div className={cx('scoreinfo-main')}>
      <ScorePreview scoreImg1={scoreImg1} scoreImg2={scoreImg2} />
      <ScoreInfoCard
        instrument={instrument}
        difficulty={difficulty}
        page={page}
        scoreType={scoreType}
      />
      <YouTube
        videoId={formattedURL}
        opts={opts}
        onReady={onPlayerReady}
        onEnd={onPlayerEnd}
      />
      <ScoreInfoExplain scoreExplain={scoreExplain} />
    </div>
  );
}

export default ScoreInfoMain;
