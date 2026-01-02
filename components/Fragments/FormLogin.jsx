import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormLogin = (props) => {
  return (
    <form action="">
      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="******" name="password" />
      <Button>Login</Button>
    </form>
  );
};

export default FormLogin;
