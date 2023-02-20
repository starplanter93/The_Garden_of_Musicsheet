import { DocumentData } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getScoresByCategory } from '../../../firebase/firebase';
import { CategoryDetail } from '../../UI/organisms';

const InstrumentDetail = () => {
  const [scoresByInst, setScoresByInst] = useState<DocumentData>([]);
  const [coverData, setCoverData] = useState<DocumentData>({});
  const { instType } = useParams();

  useEffect(() => {
    getScoresByCategory('instrument', `${instType}`)
      .then((data) => {
        setCoverData({
          name: data.name || data.songName,
          thumbnail: data.thumbnail || data.albumImg,
          artist: data.artist,
        });
        setScoresByInst(data.scores);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <CategoryDetail
      category="악기"
      coverData={coverData}
      scoresByCategory={scoresByInst}
    />
  );
};

export default InstrumentDetail;
