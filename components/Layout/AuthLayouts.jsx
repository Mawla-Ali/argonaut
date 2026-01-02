import FormLogin from "../Fragments/FormLogin";
const AuthLayout = (props) => {
  const { children, title, kalimat } = props;
  return (
    <div className="flex justify-center m-4 items-center min-h-screen">
      <div className="max-w-full">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-700 mb-6">{kalimat}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
