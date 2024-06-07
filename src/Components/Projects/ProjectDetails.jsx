import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <section className="py-10 px-6 flex flex-col items-center">
      <div className="lg:w-10/12">
        <header>
          <h1 className="text-4xl font-light text-[#bdbdbd] mb-4 flex flex-col gap-1">
            Sample <span className="text-[#333] font-bold">Project {id}</span>
          </h1>
        </header>

        <div className="w-full">
          <img src="../../public/images/projects/image33(1).svg" alt="" />
        </div>

        <div className="flex flex-col gap-2 mt-5 lg:gap-5 lg:flex-row">
          <img src="../../public/images/projects/image34.svg" alt="" />
          <p className="text-sm text-[#000] mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry&apos;s standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with.
          </p>
        </div>

        <div className="w-full mt-10 lg:mt-14">
          <img src="../../public/images/projects/image35.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
