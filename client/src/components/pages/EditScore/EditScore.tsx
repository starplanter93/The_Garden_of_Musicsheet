import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../PostMusic/PostMusic.module.scss';
import { DropDown, TextEditor, PostSidebar } from '../../UI/molecules';
import { PostButtons, MusicPostInfo } from '../../UI/organisms';
import { getScoreByMusic } from '../../../firebase/firebase';
import { useParams } from 'react-router-dom';
import { ScoreInfoType } from '../Main/Main';

const EditScore = () => {
  const cx = classNames.bind(styles);
  const [scoreData, setScoreData] = useState<ScoreInfoType>();
  const { scoreId, scoreName } = useParams();

  useEffect(() => {
    if (scoreId && scoreName) {
      getScoreByMusic(scoreName, scoreId).then((res) => setScoreData(res[0]));
    }
  }, []);

  if (scoreData === undefined) return <div>로딩중..</div>;

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('sheet-info')}>
          <PostButtons value={scoreData.instType} />
          <div className={cx('dropdown-wrapper')}>
            <div className={cx('dropdown-left')}>
              <DropDown
                text="난이도"
                option={['쉬움', '중간', '어려움']}
                value={scoreData.difficulty}
              />
            </div>
            <div className={cx('dropdown-right')}>
              <DropDown
                text="악보 종류"
                option={['단선 악보', '타브 악보']}
                value={scoreData.sheetType}
              />
            </div>
          </div>
        </div>
        <div className={cx('song-info')}>
          <MusicPostInfo type="곡 정보" value={scoreData} />
        </div>

        <div className={cx('sale-info')}>
          <MusicPostInfo type="판매 상세 정보" value={scoreData} />
          <TextEditor text="상세 내용 설명" description={scoreData.detail} />
        </div>
      </div>
      <aside>
        <PostSidebar url={scoreData.downloadURL} />
      </aside>
    </div>
  );
};

export default EditScore;
