import NavbarStruct from "./Navbar/NavbarStruct.jsx";
// import { Outlet } from "react-router-dom";
import SocialMedia from "./SocialMedia/SocialMedia.jsx";
import "./template.css";
import Logo from "./LogoAnimation/Logo.jsx";
import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa6";
import "../../i18n.jsx";
import { useTranslation } from "react-i18next";

const Template = () => {
    //Change background
  const [isDark, setIsDark] = useState(true);
  //Change language
  const [userLanguage, setUserLanguage] = useState("en"); // Estado para el idioma
  const { t, i18n } = useTranslation();
  //change background with button
  const handleBackground = () => {
    let lineMenu =document.getElementById("line");
    if(isDark){
      lineMenu.classList.replace("line-dark","line-white");
    }else{
      lineMenu.classList.replace("line-white","line-dark");
    }
    setIsDark(!isDark);
  };
  useEffect(()=>{
    // change language with user navegator
    i18n.changeLanguage(navigator.language);
  },[]);

  // change language
  const changeLanguage = () => {
    if(userLanguage === "es"){
      setUserLanguage("en"); // update language
    }else{
      setUserLanguage("es"); // update language
    }
    i18n.changeLanguage(userLanguage); // changed with i18n
  };
  return (
    <div
      className={`page w-full md:overflow-hidden md:h-screen ${
        isDark
          ? "bg-gradient-to-br from-slate-900 to-sky-800 icon-color-dark text-white fill-white"
          : "bg-dark"
      }`}
    >
      <div className="menu w-full h-14 ">
        <div className="grid grid-cols-5 gap-4">
          <Logo className="col-span-4 " />
          <div className="col-start-5 w-12 grid grid-cols-2 gap-4 mr-10 md:mr-20 justify-center justify-self-center ">
            <button onClick={changeLanguage} >{userLanguage}</button>
            <button className="" onClick={handleBackground}>
              {isDark ? (
                <FaSun className="size-7" />
              ) : (
                <IoMdMoon className="size-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full">
        <div className="social-media">
          <SocialMedia />
        </div>
        <div className="about-me w-1/2 ">
          <NavbarStruct/>
        </div>
        <div className=" este ">
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
