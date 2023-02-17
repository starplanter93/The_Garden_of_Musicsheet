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
  instrument: string;
  price: string;
  profileImg: string;
  scoreName: string;
  scoreWriter: string;
  scoreId: number | null;
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
