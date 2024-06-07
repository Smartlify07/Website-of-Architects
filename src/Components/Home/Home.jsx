import { FaArrowRightLong } from "react-icons/fa6";
import AboutSection from "./AboutSection";
import MainFocus from "./MainFocus";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <section className="pb-4 flex flex-col items-center justify-center font-Roboto px-3 lg:px-6">
      <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-32 lg:w-10/12">
        <h1 className="text-7xl mt-10 font-light flex flex-col self-center  text-[#bdbdbd] uppercase lg:text-7xl lg:mt-0">
          Project{" "}
          <span className="font-extrabold text-[#333] capitalize">Lorum</span>
        </h1>

        <div className="relative w-full ">
          <img
            src="./images/building.svg"
            className="hidden object-cover w-5/12 h-[700px] lg:block lg:w-full"
            alt="building"
          />

          <button className="bg-[#fff] border mt-4 uppercase flex items-center gap-3 text-[16px] font-Roboto font-normal tracking-wider px-6 py-4  text-[#333] lg:mt-0 lg:text-[12px] lg:bottom-0 lg:absolute">
            View Project <FaArrowRightLong className="text-lg" />
          </button>
        </div>
      </div>
      <AboutSection />
      <MainFocus />
      <Projects />
      <Contact />
    </section>
  );
};

export default Home;
