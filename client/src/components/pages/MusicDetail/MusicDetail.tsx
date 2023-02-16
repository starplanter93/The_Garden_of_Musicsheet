import { DocumentData } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getScoresByCategory } from '../../../firebase/firebase';
import { CategoryDetail } from '../../UI/organisms';

const MusicDetail = () => {
  const [scoresByMusic, setScoresByMusic] = useState<DocumentData>([]);
  const [coverData, setCoverData] = useState<DocumentData>({});
  const [totalLists, setTotalLists] = useState(0);
  const { songTitle } = useParams();

  useEffect(() => {
    getScoresByCategory('music', `${songTitle}`)
      .then((data) => {
        setCoverData({
          name: data.name || data.songName,
          thumbnail: data.thumbnail || data.albumImg,
          artist: data.artist,
        });
        setScoresByMusic(data.scores);
        setTotalLists(data.scores.length);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CategoryDetail
      category="곡"
      coverData={coverData}
      scoresByCategory={scoresByMusic}
      totalLists={totalLists}
    />
  );
};

export default MusicDetail;
