import React, { useEffect, useState } from 'react';
import { MainGrid } from '../../UI/organisms';
import { Carousel } from '../../UI/organisms';
import { getMusics } from '../../../firebase/firebase';

export type MusicData = {
  singer: string;
  scores: ScoreInfo[];
  albumImg: string;
  songTitle: string;
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
    { singer: '', scores: [], albumImg: '', songTitle: '', songId: null },
  ]);
  console.log(musicArr);
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
