import TextInput from '../../molecules/TextInput/TextInput';
import './userAuth.scss';

interface UserAuthProps {
  type: 'Login' | 'SignUp';
}

const UserAuth = ({ type }: UserAuthProps) => {
  if (type === 'Login') {
    return (
      <div className="userAuth">
        <TextInput placeholder="Email"></TextInput>
        <TextInput placeholder="Password"></TextInput>
      </div>
    );
  } else if (type === 'SignUp') {
    return (
      <div className="userAuth">
        <TextInput placeholder="Email"></TextInput>
        <TextInput placeholder="Password"></TextInput>
        <TextInput placeholder="Password Check"></TextInput>
        <TextInput placeholder="NickName"></TextInput>
      </div>
    );
  } else return null;
};

export default UserAuth;
