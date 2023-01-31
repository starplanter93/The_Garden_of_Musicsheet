import TextInput from '../../molecules/TextInput/TextInput';
import './userAuth.scss';
const UserAuth = () => {
  return (
    <div className="userAuth">
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
    </div>
  );
};

export default UserAuth;
