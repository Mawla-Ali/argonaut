const styles = {
  ab: "hover:ring-sky-700 hover:bg-sky-200",
  b: "hover:ring-sky-700 hover:bg-[#1446DB]",
};
const jenis = {
  p: "bg-white",
  b: "bg-sky-600 text-white",
  a: "bg-green-400",
};
const Tombol = (props) => {
  const { children, hubung, variant, jen, type, onClick, harga } = props;
  return (
    <div>
      <div className={`${jenis[jen]} ring-1 ${styles[variant]} ring-slate-600 max-w-2xl w-full drop-shadow-xl p-4 rounded max-h-xl h-full flex justify-center`}>
        <a href={hubung} className="">
          <button className={`font-bold `} type={type} onClick={onClick}>
            {children}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Tombol;
