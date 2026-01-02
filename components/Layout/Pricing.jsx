import { useState } from "react";
import Hlp from "../Elements/kakera/HLP";
import Tombol from "../Elements/Button/Bu";
import Travel from "../Elements/kakera/HWT";
import Company from "../Elements/kakera/HCP";
import Rabi from "../Elements/kakera/HWP";
const juduls = [
  {
    id: 1,
    desk: "Landing Page",
    funct: <Hlp />,
  },
  {
    id: 2,
    desk: "Web Travel & Tour",
    funct: <Travel />,
  },
  {
    id: 3,
    desk: "Company Profile",
    funct: <Company />,
  },
  {
    id: 4,
    desk: "Web Undangan Pernikahan",
    funct: <Rabi />,
  },
];
const Pricing = () => {
  const [menu, setMenu] = useState(1);

  const handleKanan = () => {
    setMenu((prev) => (prev < juduls.length ? prev + 1 : 1));
  };
  const handleKiri = () => {
    setMenu((prev) => (prev > 1 ? prev - 1 : juduls.length));
  };
  return (
    <div className="relative">
      <div className="min-h-screen">
        <h1 className="pt-28 flex justify-center text-5xl font-bold" id="Pricing">
          Harga Layanan
        </h1>
        <div className="flex justify-center">
          <div className="inline-flex">
            <div className="mr-18 mt-4 flex items-center content-center">
              <Tombol jen="p" onClick={() => handleKiri()}>
                {" "}
                {"<"}{" "}
              </Tombol>
            </div>
            <div className="flex justify-center mt-7 h-28 ">
              <div className="bg-[#1446DB] mt-1 flex px-16 justify-center items-center rounded-3xl">
                {""}
                {juduls
                  .filter((j) => j.id === menu)
                  .map((j) => (
                    <div key={j.id} className="text-[15px] font-semibold text-white">
                      {j.desk}
                    </div>
                  ))}
              </div>
            </div>
            <div className="ml-18 mt-4 flex items-center content-center">
              <Tombol jen="p" onClick={() => handleKanan()}>
                {">"}
              </Tombol>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center ">
            <div className="bg-slate-400 w-xl rounded-2xl mt-16 pb-[88px] md:max-w-4xl md:p-0 md: md:w-full lg:max-w-[1400px] lg:w-full">
              {juduls
                .filter((j) => j.id === menu)
                .map((j) => (
                  <div key={j.id} className="">
                    {j.funct}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex">
            <div className="mr-18 mt-4 flex items-center content-center">
              <Tombol jen="p" onClick={() => handleKiri()} hubung="#Pricing">
                {" "}
                {"<"}{" "}
              </Tombol>
            </div>
            <div className="flex justify-center mt-7 h-28 ">
              <div className="bg-[#1446DB] mt-1 flex px-16 justify-center items-center rounded-3xl">
                {""}
                {juduls
                  .filter((j) => j.id === menu)
                  .map((j) => (
                    <div key={j.id} className="text-[15px] font-semibold text-white">
                      {j.desk}
                    </div>
                  ))}
              </div>
            </div>
            <div className="ml-18 mt-4 flex items-center content-center">
              <Tombol jen="p" onClick={() => handleKanan()} hubung="#Pricing">
                {">"}
              </Tombol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
