import styles from './songtitle.module.scss';
import { ImgLayout, Text, Button, Icon } from '../../atoms';
import classnames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

interface SongTitleProps {
  albumImg?: string;
  songTitle: string;
  singer: string;
}

function SongTitle({ albumImg, songTitle, singer }: SongTitleProps) {
  const cx = classnames.bind(styles);
  const navigate = useNavigate();

  return (
    <div className={cx('songtitle-wrapper')}>
      <a className={cx('albumimg-wrapper')}>
        <ImgLayout src={albumImg} shape="square" size="m" alt="album-cover" />
      </a>
      <a className={cx('song-info')}>
        <Text size="lg" weight="regular" color="black">
          {songTitle}
        </Text>
        <Text size="m" weight="regular" color="black">
          {singer}
        </Text>
      </a>
      <Button
        theme="tertiary"
        size="auto"
        onClick={() => navigate(`/music/${songTitle}-${singer}`)}
      >
        <>
          <Text size="s" weight="regular" color="gray">
            더보기
          </Text>
          <Icon icon="MdKeyboardArrowRight" size="xs" color="gray" />
        </>
      </Button>
    </div>
  );
}

export default SongTitle;
