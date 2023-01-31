import TextInput from '../../molecules/TextInput/TextInput';
import './login.scss';
const Login = () => {
  return (
    <div className="login">
      <TextInput placeholder="Email"></TextInput>
      <TextInput placeholder="Password"></TextInput>
    </div>
  );
};

export default Login;
