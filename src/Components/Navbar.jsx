import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const styleActive = (isActive) =>
    isActive ? "border-t border-b border-b-black border-t-black py-3" : "";

  return (
    <nav className="py-4 font-Roboto px-5 flex items-center justify-center overflow-hidden">
      <div className="flex justify-between items-center w-full lg:w-9/12">
        <img src="./images/logo.svg" alt="" />

        <div
          className={`${
            showNav
              ? "flex flex-col px-5 gap-6 justify-center translate-x-0 translate-y-0 border min-h-screen z-20"
              : "translate-x-full"
          } fixed py-4 text-lg top-0 right-0 transition-all bg-white w-2/3 h-full lg:relative lg:py-0 lg:translate-x-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-10 lg:min-h-0 lg:bg-transparent lg:text-base lg:w-auto lg:h-auto`}
        >
          <NavLink
            className={`${({ isActive }) =>
              styleActive(
                isActive
              )} transition-all hover:transition-all hover:text-[#bdbdbd]`}
            to="/"
          >
            Main
          </NavLink>
          <NavLink
            className={`${({ isActive }) =>
              styleActive(
                isActive
              )} transition-all hover:transition-all hover:text-[#bdbdbd]`}
            to="gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className={`${({ isActive }) =>
              styleActive(
                isActive
              )} transition-all hover:transition-all hover:text-[#bdbdbd]`}
            to="projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={`${({ isActive }) =>
              styleActive(
                isActive
              )} transition-all hover:transition-all hover:text-[#bdbdbd]`}
            to="certifications"
          >
            Certifications
          </NavLink>
          <NavLink
            className={`${({ isActive }) =>
              styleActive(
                isActive
              )} transition-all hover:transition-all hover:text-[#bdbdbd]`}
            to="contact"
          >
            Contacts
          </NavLink>
        </div>

        {!showNav && (
          <div
            onClick={toggleNav}
            className="flex flex-col gap-1 z-30 lg:hidden"
          >
            <span className="w-[30px] bg-black h-[2px]"></span>
            <span className="w-[30px] bg-black h-[2px]"></span>
            <span className="w-[30px] bg-black h-[2px]"></span>
          </div>
        )}

        {showNav && (
          <div
            onClick={toggleNav}
            className="flex flex-col gap-1 z-30 lg:hidden"
          >
            <span className="w-[30px] bg-black h-[2px] translate-x-0 translate-y-1 rotate-[45deg]"></span>
            <span className="w-[30px] bg-black h-[2px] -rotate-[45deg]"></span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
