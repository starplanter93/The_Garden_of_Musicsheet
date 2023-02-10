import React, { useEffect, useState } from 'react';
import { MainGrid } from '../../UI/organisms';
import { Carousel } from '../../UI/organisms';
import { getMusics } from '../../../firebase/firebase';

type MusicArrType = {
  singer: string;
  scores: ScoreInfo[];
  albumImg: string;
  songTitle: string;
  songId: number | null;
}[];

interface ScoreInfo {
  difficulty: string;
  instrument: string;
  price: string;
  profileImg: string;
  scoreName: string;
  scoreWriter: string;
  scoreId: number | null;
}

function Main() {
  const [musicArr, setMusicArr] = useState<MusicArrType>([
    { singer: '', scores: [], albumImg: '', songTitle: '', songId: null },
  ]);
  useEffect(() => {
    getMusics().then((data) => {
      console.log(data);
      setMusicArr(data);
    });
  }, []);
  console.log(musicArr);
  return (
    <>
      <Carousel />
      {/* <MainGrid musicData={musicArr} /> */}
    </>
  );
}

export default Main;
