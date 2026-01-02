const Input = (props) => {
  const { type, placeholder, name } = props;
  return <input id={name} type={type} className="text-sm border rounded w-full py2 px3 text-slate-700 placeholder:opacity-50" placeholder={placeholder} name={name} />;
};

export default Input;
