import { PostInput } from '../../molecules';
import { Text } from '../../atoms';
import styles from './musicPostInfo.module.scss';
import classNames from 'classnames/bind';
import { ScoreInfoType } from '../../../pages/Main/Main';

interface MusicPostInfoProps {
  type: '곡 정보' | '판매 상세 정보';
  value?: ScoreInfoType;
}

const MusicPostInfo = ({ type, value }: MusicPostInfoProps) => {
  const cx = classNames.bind(styles);

  const renderInputs = () => {
    switch (type) {
      case '곡 정보':
        return (
          <>
            <PostInput
              text="저작권 정보"
              type="dropdown"
              placeholder="곡 제목을 입력해주세요"
              value={value}
            />
            <PostInput type="input" text="악보 제목" value={value} />
          </>
        );
      case '판매 상세 정보':
        return (
          <>
            <PostInput
              type="input"
              text="가격"
              placeholder="원 단위"
              value={value}
            />
            <PostInput
              type="input"
              text="유튜브 주소 (선택)"
              placeholder="유튜브 영상 URL을 넣어주세요"
              value={value}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={cx('text')}>
        <Text weight="semibold" size="xlg">
          {type}
        </Text>
      </div>
      {renderInputs()}
    </div>
  );
};

export default MusicPostInfo;
