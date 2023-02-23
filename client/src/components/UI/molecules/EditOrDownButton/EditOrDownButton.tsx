import { useNavigate } from 'react-router-dom';
import { Button, Icon, Text } from '../../atoms';

interface EditOrDownButtonProps {
  event?: 'edit' | 'download';
  link?: string;
  downloadURL?: string;
}

const EditOrDownButton = ({
  event,
  link,
  downloadURL,
}: EditOrDownButtonProps) => {
  const navigate = useNavigate();

  if (event === 'edit') {
    return (
      <Button
        theme="secondary"
        size="xs"
        onClick={() => navigate(link as string)}
      >
        <Text color="blue" size="s">
          수정하기
        </Text>
      </Button>
    );
  } else {
    return (
      <a href={downloadURL} target="_blank" rel="noreferrer">
        <Button theme="secondary" size="xs">
          <Icon icon="MdOutlineFileDownload" color="green" size="s" />
        </Button>
      </a>
    );
  }
};

export default EditOrDownButton;
