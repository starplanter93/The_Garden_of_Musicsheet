import PostInput from '../../molecules/PostInput/PostInput';

interface MusicPostInfoProps {
  type: '곡 정보' | '판매 상세 정보';
}

const MusicPostInfo = ({ type }: MusicPostInfoProps) => {
  if (type === '곡 정보') {
    return (
      <>
        <PostInput
          type="input"
          text="곡 제목"
          placeholder="예시) 사건의 지평선"
        />
        <PostInput type="input" text="원곡자" placeholder="예시) 윤하" />
        <PostInput
          type="input"
          text="악보제작자"
          placeholder="내용을 입력해 주세요"
        />
      </>
    );
  } else if (type === '판매 상세 정보') {
    return (
      <>
        <PostInput type="input" text="가격" placeholder="원 단위" />
        <PostInput
          type="input"
          text="유튜브 주소 (선택)"
          placeholder="유튜브 영상 URL을 넣어주세요"
        />
      </>
    );
  } else return null;
};

export default MusicPostInfo;
