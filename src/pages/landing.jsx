import Ebk from "../../components/Elements/kakera/EHBK";
import Navbar from "../../components/Elements/kakera/EHN";
import Akhir from "../../components/Elements/kakera/Final";
import Akhirnya from "../../components/Elements/kakera/Foot";
import About from "../../components/Layout/About";
import Hero from "../../components/Layout/Hero";
import Porto from "../../components/Layout/Porto";
import Pricing from "../../components/Layout/Pricing";
const LandingPage = (props) => {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full">
        <Hero />
        <About />
        <Porto />
        <Pricing />
        <Akhir />
        <Akhirnya />
      </div>
    </div>
  );
};

export default LandingPage;
