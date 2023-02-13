import { PostInput } from '../../molecules';
import { Text } from '../../atoms';
import styles from './musicPostInfo.module.scss';
import classNames from 'classnames/bind';
interface MusicPostInfoProps {
  type: '곡 정보' | '판매 상세 정보';
}

const MusicPostInfo = ({ type }: MusicPostInfoProps) => {
  const cx = classNames.bind(styles);
  if (type === '곡 정보') {
    return (
      <div>
        <div className={cx('text')}>
          <Text weight="semibold" size="xlg">
            {type}
          </Text>
        </div>
        <PostInput
          text="저작권 정보"
          type="dropdown"
          placeholder="곡 제목을 입력해주세요"
        />
        <PostInput
          type="input"
          text="곡 제목"
          placeholder="예시) 사건의 지평선"
        />
        <PostInput type="input" text="원곡자" placeholder="예시) 윤하" />
      </div>
    );
  } else if (type === '판매 상세 정보') {
    return (
      <div>
        <div className={cx('text')}>
          <Text weight="semibold" size="xlg">
            {type}
          </Text>
        </div>
        <PostInput type="input" text="가격" placeholder="원 단위" />
        <PostInput
          type="input"
          text="유튜브 주소 (선택)"
          placeholder="유튜브 영상 URL을 넣어주세요"
        />
      </div>
    );
  } else return null;
};

export default MusicPostInfo;
