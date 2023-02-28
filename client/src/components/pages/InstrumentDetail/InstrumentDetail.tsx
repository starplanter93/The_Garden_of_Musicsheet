import { DocumentData } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getScoresByCategory } from '../../../firebase/firebase';
import { CategoryDetail } from '../../UI/organisms';
import { Score } from '../../../redux/PostSlice';
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
        // 삭제된, 회원탈퇴한 유저의 데이터 필터
        const filteredData = data.scores
          .filter((data: Score) => !data.isDeleted)
          .filter((data: Score) => !data.isOptout);
        setScoresByInst(filteredData);
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
