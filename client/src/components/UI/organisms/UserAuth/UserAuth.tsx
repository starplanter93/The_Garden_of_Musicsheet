import { Button, Text } from '../../atoms';
import UserAuthInput from '../../molecules/UserAuthInput/UserAuthInput';
import './userAuth.scss';

interface UserAuthProps {
  type: 'Login' | 'SignUp';
}

const UserAuth = ({ type }: UserAuthProps) => {
  if (type === 'Login') {
    return (
      <div className="userAuth">
        <div className="userAuth__logo">
          <img src={require('../../../../assets/Logo.png')} />
        </div>
        <Button theme="transparent">
          <Text weight="semibold" size="xlg" color="green">
            악보의 정원
          </Text>
        </Button>
        <UserAuthInput placeholder="이메일"></UserAuthInput>
        <UserAuthInput placeholder="비밀번호"></UserAuthInput>
        <div className="userAuth__btn">
          <Button size="xl">
            <Text weight="semibold" color="white" size="lg">
              로그인
            </Text>
          </Button>
        </div>
      </div>
    );
  } else if (type === 'SignUp') {
    return (
      <div className="userAuth">
        <Button theme="transparent">Logo</Button>
        <UserAuthInput placeholder="이메일"></UserAuthInput>
        <UserAuthInput placeholder="비밀번호"></UserAuthInput>
        <UserAuthInput placeholder="비밀번호 확인"></UserAuthInput>
        <UserAuthInput placeholder="닉네임"></UserAuthInput>
      </div>
    );
  } else return null;
};

export default UserAuth;
