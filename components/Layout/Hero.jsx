import Ebk from "../Elements/kakera/EHBK";
import Navbar from "../Elements/kakera/EHN";

const Hero = (props) => {
  return (
    <div className="">
      <div className=" bg-[#14C5DB] min-h-screen bg-linear-to-br from-[#1446DB] w-full via-[#1485DB] to-[#14C5DB] relative ">
        <div className="absolute inset-0 bg-[url('../../public/Img/Hero/pattern.png')] opacity-75 pointer-events-none" />
        <nav className=" p-5 border-b-4 border-white fixed top-0 z-50 w-full bg-[#1446DB] bg-linear-to-l from-[#1485DB] to-[#1446DB]">
          <Navbar />
        </nav>
        <div className="py-24">
          <Ebk />
        </div>
      </div>
    </div>
  );
};

export default Hero;
