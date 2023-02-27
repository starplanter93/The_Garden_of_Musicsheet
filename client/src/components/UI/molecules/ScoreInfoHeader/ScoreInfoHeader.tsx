import { Text, Button } from '../../atoms';
import styles from './scoreinfoheader.module.scss';
import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth, deleteArticle } from '../../../../firebase/firebase';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
interface ScoreInfoHeaderProps {
  scoreName: string;
  singer: string;
  date: string | number;
}

function ScoreInfoHeader({ scoreName, singer, date }: ScoreInfoHeaderProps) {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const params = useParams();
  const { pathname } = useLocation();
  const formattedDate = new Intl.DateTimeFormat('ko-kr').format(new Date(date));

  const handleDeleteArticle = async () => {
    const user = auth.currentUser;
    if (user && params.scoreId) {
      const scoreId = params.scoreId.toString();
      deleteArticle(user.uid, scoreId);
    }
    // toast.success('삭제됐습니다!');
    // navigate('/');
  };

  return (
    <div className={cx('songinfo-header')}>
      <div className={cx('text-wrapper')}>
        <Text size="txlg" weight="semibold">
          {scoreName}
        </Text>
        <Text size="m">{singer}</Text>
        <Text size="m">{formattedDate}</Text>
      </div>
      <div className={cx('button-wrapper')}>
        <Button
          theme="transparent"
          size="auto"
          onClick={() => {
            navigate(`/scores/edit${pathname}`);
          }}
        >
          <Text color="gray">수정</Text>
        </Button>
        <Button
          theme="transparent"
          size="auto"
          onClick={() => handleDeleteArticle()}
        >
          <Text color="gray">삭제</Text>
        </Button>
      </div>
    </div>
  );
}

export default ScoreInfoHeader;
