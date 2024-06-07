import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 flex justify-center font-Roboto items-center px-6 lg:px-6 bg-[#333]">
      <div className="grid gap-10 lg:gap-[15rem] lg:flex lg:w-10/12 ">
        <div className="grid gap-10 justify-items-center lg:justify-items-stretch lg:grid-cols-3 lg:w-7/12 ">
          <img src="./images/logowhite.svg" className="w-9/12" alt="" />

          <div className="">
            <h3 className="text-base font-semibold text-white mb-4 text-center lg:text-left">
              Information
            </h3>
            <ul className="flex flex-col items-center gap-3 text-sm tracking-wider lg:items-start">
              <Link to={"/"} className="text-white">
                Main
              </Link>
              <Link to={"/"} className="text-white">
                Gallery
              </Link>
              <Link to={"/"} className="text-white">
                Projects
              </Link>
              <Link to={"/"} className="text-white">
                Certifications
              </Link>
              <Link to={"/"} className="text-white">
                Contacts
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-4 text-center lg:text-left">
              Contacts
            </h3>
            <ul className="flex flex-col  items-center gap-5 text-sm tracking-wider lg:items-start">
              <Link to={"/"} className="text-white flex  gap-3">
                <MdLocationPin className="text-2xl" />
                <div className="flex flex-col gap-1">
                  <span>1234 St. Street</span>
                  <span>Austin Texas 784</span>
                </div>
              </Link>
              <Link
                to={"/"}
                className="text-white mt-10 flex items-center gap-3"
              >
                <FaPhone className="" />
                <p>512.333.2222</p>
              </Link>
              <Link
                to={"/"}
                className="text-white flex mt-7 items-center gap-3"
              >
                <FaEnvelope className="" />
                <p>sampleemail@gmail.com</p>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" ">
          <h3 className="text-base font-semibold text-white mb-4 text-center lg:text-left">
            Information
          </h3>
          <ul className="flex  items-center gap-3 text-xl tracking-wider lg:items-start text-white ">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaPinterest />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
