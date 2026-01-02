const Button = (props) => {
  const { children } = props;
  return (
    <div className="bg-[#14DB6D] text-white max-w-96 h-12 rounded-full">
      <a href="https://wa.me/6285701468892?text=Halo%20saya%20ingin%20konsultasi%20website" className="w-full h-full">
        <button className="w-full h-full flex items-center justify-center font-semibold text-2xl">Free Consult</button>
      </a>
    </div>
  );
};
export default Button;
