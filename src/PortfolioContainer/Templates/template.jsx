// import NavbarStruct from "./navbar/NavbarStruct.jsx";
// import { Outlet } from "react-router-dom";
import SocialMedia from "./SocialMedia/SocialMedia.jsx";
import "./template.css";
import Logo from "./LogoAnimation/Logo.jsx";
import { useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa6";

const Template = () => {
  const [languaje, setLanguaje] = useState("esp");
  const [isDark, setIsDark] = useState(true);
  const handleBackground = () => {
    setIsDark(!isDark);
  };
  return (
    <div
      className={`page w-full md:overflow-hidden md:h-screen ${
        isDark
          ? "bg-gradient-to-br from-slate-900 to-sky-800 icon-color-dark text-white fill-white"
          : "bg-white"
      }`}
    >
      <div className="menu w-full h-14 ">
        <div className="grid grid-cols-5 gap-4">
          <Logo className="col-span-4" />
          <div className="col-start-5 w-12 grid grid-cols-2 gap-4 mr-10 md:mr-20  justify-center justify-self-center  align-middle ">
            <button>es</button>
            <button className="" onClick={handleBackground}>
                {isDark? <FaSun className="size-7"/>:<IoMdMoon className="size-7"/>}
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full">
        <div className="social-media">
          <SocialMedia />
        </div>
        <div className="about-me w-2/5 ">about me</div>
        <div className=" este">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tempus volutpat tincidunt. Ut tortor urna, consectetur non neque at,
          elementum iaculis dui. Morbi pretium augue in mi accumsan vulputate.
          Nulla sodales magna quis sapien consequat ultrices. Suspendisse
          condimentum lectus sit amet erat tincidunt hendrerit. Mauris
          sollicitudin ac lectus sed interdum. Mauris dapibus ex nisi, vel
          tempus purus vulputate non. In vel massa nulla.
        </div>
      </div>
      <div />
    </div>
  );
};

export default Template;
