import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="py-10 px-3 flex flex-col items-center lg:px-6">
      <div className="xl:w-11/12 flex flex-col">
        <h1 className="text-[#bdbdbd] text-6xl font-light mb-5">
          Our Projects
        </h1>
        <ProjectsGrid />

        <Link to={"projects"} className="self-end">
          <button className="bg-[#333] mt-5 py-4 px-7 text-white text-sm flex items-center gap-3 uppercase font-light transition-all ease-in hover:bg-[#fafafa] hover:text-[#333] lg:text-[12px]">
            All projects <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </section>
  );
};

const ProjectsGrid = () => {
  return (
    <>
      <div className="grid gap-4  mt-5 lg:grid-cols-2">
        <img src="./images/Rectangle12.svg" className="w-full" alt="project" />
        <img src="./images/image15.svg" className="w-full" alt="project" />
      </div>

      <div className="grid gap-5 mt-5 lg:grid-cols-3">
        <div className=" w-full lg:h-[255px]">
          <img
            src="./images/image16.svg"
            className="object-cover h-full w-full"
            alt="project"
          />
        </div>

        <div className=" w-full lg:h-[255px]">
          <img
            src="./images/image17.svg"
            className="object-cover h-full w-full "
            alt="project"
          />
        </div>

        <div className="w-full lg:h-[255px]">
          <img
            src="./images/image18.svg"
            className="object-cover w-full h-full"
            alt="project"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
