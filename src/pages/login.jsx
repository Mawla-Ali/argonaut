import AuthLayout from "../../components/Layout/AuthLayouts";
import FormLogin from "../../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <AuthLayout title="Login" kalimat="Welcome, please enter your details">
      <FormLogin />
      <p className="font-bold text-sm mt-5  ml-5">
        Don't have an account ?{" "}
        <Link to="/register" className="font-bold text-sky-600 underlined">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
