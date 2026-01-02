import AuthLayout from "../../components/Layout/AuthLayouts";
import FormRegister from "../../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register" kalimat="Welcome, please fill your information">
      <FormRegister />
      <p className="font-bold text-sm mt-5  ml-15">
        Have an account ?{" "}
        <Link to="/login" className="font-bold text-sky-600 underlined">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
