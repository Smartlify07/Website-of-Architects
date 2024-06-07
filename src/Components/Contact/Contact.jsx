import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-10 px-6 flex flex-col items-center lg:px-6">
      <div className="lg:w-10/12 flex  flex-col justify-between lg:items-center lg:flex-row">
        <div className="flex flex-col gap-5 py-4">
          <header>
            <h1 className="text-[#bdbdbd] font-light text-4xl">
              Contact <span className="font-bold text-[#333]">Information</span>
            </h1>
          </header>

          <div>
            <p className="text-[#333] text-sm font-semibold">Company Name</p>
            <p className="text-[#333] font-extralight text-sm">
              1234 Sample Street Austin Texas 76401
            </p>
          </div>

          <p className="text-[#333] text-sm font-semibold">512.333.2222</p>

          <p className="text-[#333] font-extralight text-sm">
            sampleemail@gmail.com
          </p>
          <button className="bg-dark px-6 flex items-center gap-2 py-3 self-start bg-[#333] text-white">
            Contact us <FaArrowRightLong className="text-lg" />
          </button>
        </div>
        <div className="lg:w-7/12">
          <img src="./images/contact/image14.png" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
