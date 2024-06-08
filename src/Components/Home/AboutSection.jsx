import { FaRightLong } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section className="py-5  lg:px-6 w-full flex flex-col items-center mt-10">
      <div className="py-7 relative px-6 bg-[#fafafa] flex flex-col justify-between gap-10 lg:px-10 lg:h-96 lg:flex-row lg:w-11/12">
        <ImageGrid />
        <AboutDescription />
      </div>
    </section>
  );
};

const ImageGrid = () => {
  return (
    <div className=" grid gap-6 lg:grid-cols-2 lg:bottom-7 lg:relative">
      <div className="flex flex-col gap-5">
        <img src="./images/Rectangle8.svg" alt="" />
        <img src="./images/Rectangle10.svg" alt="" />
      </div>
      <img src="./images/Rectangle9.svg" className="mt-10" alt="" />
    </div>
  );
};

const AboutDescription = () => {
  return (
    <div className="flex flex-col gap-4 lg:w-7/12">
      <h1 className="text-5xl text-[#bdbdbd] font-light">About</h1>
      <p className="text-[#000] font-light">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

      <button className="px-7 border self-start py-4 bg-white font-Roboto text-sm flex items-center gap-4 tracking-wider uppercase transition-all ease-in hover:bg-[#333] hover:text-white">
        Read more <FaRightLong />
      </button>
    </div>
  );
};
export default AboutSection;
