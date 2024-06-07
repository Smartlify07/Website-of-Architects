/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { projects } from "../../../public/data/projects";
import { FaArrowRightLong } from "react-icons/fa6";
const Projects = () => {
  return (
    <section className="py-10 px-6 flex flex-col items-center">
      <div className=" py-3 lg:w-10/12">
        <header>
          <h1 className="text-[#bdbdbd] font-light text-5xl flex flex-col gap-2 mb-6">
            Our <span className="text-[#333] font-bold">Projects</span>
          </h1>
        </header>

        <ProjectsGrid />
      </div>
    </section>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="border-t pt-5 flex flex-col gap-9 border-t-[#bdbdbd]">
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </div>
  );
};

const ProjectItem = ({ id, name, description, projectImage }) => {
  console.log(projectImage);
  return (
    <div className=" bg-[#fafafa] flex flex-col gap-5 font-Roboto pr-0 lg:pr-4 lg:flex-row">
      <div className="lg:w-6/12">
        <img src={projectImage} className="w-full h-full" alt="project-image" />
      </div>

      <div className="flex flex-col gap-3 justify-between px-5 py-6 lg:w-6/12">
        <h1 className="text-[#BDBDBD] text-4xl font-light">{name}</h1>
        <p className="text-[#000] text-base lg:text-sm">{description}</p>
        <Link
          to={`/projects/${id}`}
          className="px-6 py-4  self-start bg-white text-[#000] flex items-center gap-3"
        >
          Read more <FaArrowRightLong className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
