import { useEffect, useState } from 'react';
import { MainGrid } from '../../UI/organisms';
import { Carousel } from '../../UI/organisms';
import { getMusics } from '../../../firebase/firebase';

export type MusicData = {
  artist: string;
  scores: ScoreInfo[];
  albumImg: string;
  songName: string;
  songId: number | null;
}[];

export interface ScoreInfo {
  difficulty: string;
  instType: string;
  price: string;
  profileImg: string;
  scoreName: string;
  author: string;
  scoreId: number;
}

function Main() {
  const [musicArr, setMusicArr] = useState<MusicData>([
    { artist: '', scores: [], albumImg: '', songName: '', songId: null },
  ]);
  useEffect(() => {
    getMusics().then((data) => {
      setMusicArr(data);
    });
  }, []);
  return (
    <>
      <Carousel />
      <MainGrid musicData={musicArr} />
    </>
  );
}

export default Main;
