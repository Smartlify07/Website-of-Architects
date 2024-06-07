import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-10 px-4 flex flex-col items-center w-full  lg:px-6">
      <div className="flex flex-col w-full gap-5 lg:w-11/12">
        <h1 className="text-5xl text-[#bdbdbd] font-light text-left self-start">
          Contact Us
        </h1>
        <div className="flex w-full gap-14 justify-between items-center lg:w-full">
          <ContactForm />
          <div className="hidden lg:block lg:w-7/12">
            <img
              src="./images/image12.svg"
              className="hidden lg:block w-full"
              alt="contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full lg:w-7/12">
      <input
        type="text"
        className="px-5 py-4 bg-[#f3f3f3] text-[#8d8d8d] focus:border-none focus:outline-none"
        name="name"
        placeholder="Name"
      />
      <input
        type="tel"
        name="Phone number"
        className="px-5 py-3 bg-[#f3f3f3] text-[#8d8d8d] focus:border-none focus:outline-none"
        placeholder="Phone number"
      />
      <input
        type="email"
        name="email"
        className="px-5 py-3 bg-[#f3f3f3] text-[#8d8d8d] focus:border-none focus:outline-none"
        placeholder="E-mail"
      />
      <input
        type="text"
        name="interest"
        className="px-5 py-3 bg-[#f3f3f3] text-[#8d8d8d] focus:border-none focus:outline-none"
        placeholder="Interested in"
      />
      <textarea
        name="message"
        placeholder="Message"
        className="resize-none px-5 py-5 bg-[#f3f3f3] text-[#8d8d8d] focus:border-none focus:outline-none"
      ></textarea>

      <button className="bg-[#333] font-light font-Roboto flex items-center gap-3 px-10 text-white py-3 self-start lg:mt-10">
        Send <FaArrowRightLong className="text-lg" />
      </button>
    </form>
  );
};

export default Contact;
