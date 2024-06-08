import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className=" px-6 flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-3xl text-[#333] font-Roboto lg:text-5xl">
        Page not found 😶😶
      </h1>
      <Link to={"/"} className="text-[#333] font-semibold font-Roboto">
        Let&apos;s get you back home{" "}
        <FaArrowRightLong className="text-lg inline ml-2" />
      </Link>
    </section>
  );
};

export default NotFound;
