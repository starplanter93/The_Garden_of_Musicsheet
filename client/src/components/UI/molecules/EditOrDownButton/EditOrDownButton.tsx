import { useNavigate } from 'react-router-dom';
import { Button, Icon, Text } from '../../atoms';

interface EditOrDownButtonProps {
  event: 'edit' | 'download';
}

const EditOrDownButton = ({ event }: EditOrDownButtonProps) => {
  if (event === 'edit') {
    const navigate = useNavigate();

    return (
      // Todo: 경로 수정
      <Button theme="secondary" size="xs" onClick={() => navigate('/edit')}>
        <Text color="blue" size="s">
          수정하기
        </Text>
      </Button>
    );
  } else {
    // Todo: 다운로드 로직
    const handleDownload = () => {
      console.log('다운로드');
    };

    return (
      <Button theme="secondary" size="xs" onClick={handleDownload}>
        <Icon icon="MdOutlineFileDownload" color="green" size="s" />
      </Button>
    );
  }
};

export default EditOrDownButton;
