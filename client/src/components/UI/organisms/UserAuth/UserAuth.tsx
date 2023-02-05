import { Button, Icon, Text } from '../../atoms';
import { UserAuthInput } from '../../molecules';
import './userAuth.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

interface UserAuthProps {
  type: 'Login' | 'SignUp';
}

const UserAuth = ({ type }: UserAuthProps) => {
  const userLoginData = useSelector((state: RootState) => state.userInfo);
  const userRegData = useSelector((state: RootState) => state.regInfo);

  if (type === 'Login') {
    const handleLogin = () => {
      console.log('loggedIn');
    };
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
        <div className="userAuth__login__btn">
          <Button size="xl" onClick={() => handleLogin()}>
            <Text weight="semibold" color="white" size="lg">
              로그인
            </Text>
          </Button>
        </div>

        <hr></hr>

        <>
          <Button theme="secondary" size="xl" onClick={() => handleLogin()}>
            <div className="userAuth__oauth__btn">
              <div className="userAuth__oauth__btn--icon">
                <Icon icon="FcGoogle"></Icon>
              </div>
              <div className="userAuth__oauth__btn--text">
                <Text weight="regular" color="black" size="lg">
                  Google로 시작하기
                </Text>
              </div>
            </div>
          </Button>
        </>
        <div className="userAuth__register__btn">
          <Text>회원가입 하러가기</Text>
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
        <div className="userAuth__btn">
          <Button size="xl">
            <Text weight="semibold" color="white" size="lg">
              회원가입
            </Text>
          </Button>
        </div>
      </div>
    );
  } else return null;
};

export default UserAuth;
