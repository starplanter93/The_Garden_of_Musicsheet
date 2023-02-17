import { DocumentData } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getScoresByInstrument } from '../../../firebase/firebase';
import { CategoryDetail } from '../../UI/organisms';

const InstrumentDetail = () => {
  const [scoresByInst, setScoresByInst] = useState<DocumentData>({});
  const [totalLists, setTotalLists] = useState(0);
  const { instType } = useParams();

  useEffect(() => {
    getScoresByInstrument(`${instType}`)
      .then((data) => {
        setScoresByInst(data);
        setTotalLists(data.scores.length);
      })
      .catch((error) => console.log(error));
  }, []);

  return <CategoryDetail scoresByInst={scoresByInst} totalLists={totalLists} />;
};

export default InstrumentDetail;
