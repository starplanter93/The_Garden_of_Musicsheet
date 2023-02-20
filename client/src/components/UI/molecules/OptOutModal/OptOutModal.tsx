import styles from './optOutModal.module.scss';
import classNames from 'classnames/bind';
import { Button, Text } from '../../atoms';
import { Dispatch, SetStateAction } from 'react';
import { auth } from '../../../../firebase/firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from 'firebase/auth';
import { persistor } from '../../../../redux/store';
const OptOutModal = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const handleOptOut = async () => {
    const user = auth.currentUser;
    if (user)
      try {
        // deleteUser(user);
        await auth.signOut();
        await persistor.purge();
        toast.success('그동안 이용해주셔서 고마워요!🙇‍♂️');
        navigate('/');
        return;
      } catch (err) {
        console.log(err);
      }
  };
  return (
    <div className={cx('background')}>
      <div className={cx('container')}>
        <div className={cx('closebtn')}>
          <Button size="tiny" onClick={() => setModal(false)}>
            X
          </Button>
        </div>
        <div className={cx('title')}>
          <Text size="xlg" weight="semibold">
            정말 탈퇴하시겠습니까?
          </Text>
        </div>
        <div className={cx('body')}>
          <Text size="xlg">남아있는 캐쉬가 전부 없어질 거에요😢</Text>
        </div>
        <div className={cx('footer')}>
          <Button theme="cancel" size="m" onClick={() => setModal(false)}>
            <Text color="white">취소하기</Text>
          </Button>
          <Button size="m" onClick={() => handleOptOut()}>
            <Text color="white">탈퇴하기</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OptOutModal;
