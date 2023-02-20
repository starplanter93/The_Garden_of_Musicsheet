import { useEffect, useState } from 'react';
import { MainGrid } from '../../UI/organisms';
import { Carousel } from '../../UI/organisms';
import { getMusics } from '../../../firebase/firebase';

export type MusicData = {
  artist: string;
  scores: ScoreInfoType[];
  albumImg: string;
  songName: string;
  songId: number | null;
}[];

export interface ScoreInfoType {
  albumImg: string;
  artist: string;
  author: string;
  authorId: string;
  author_profile: string;
  createdAt: string;
  detail: string;
  difficulty: string;
  downloadURL: string;
  instType: string;
  price: string;
  scoreId: string;
  scoreName: string;
  sheetType: string;
  songName: string;
  youtubeURL: string;
}

function Main() {
  const [musicArr, setMusicArr] = useState<MusicData>([
    { artist: '', scores: [], albumImg: '', songName: '', songId: null },
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
