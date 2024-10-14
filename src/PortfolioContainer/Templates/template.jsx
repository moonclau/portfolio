import { useEffect, useState, React } from "react";
import "./template.css";
import Logo from "./LogoAnimation/Logo.jsx";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa6";
import NavbarStruct from "./Navbar/NavbarStruct.jsx";
// import { Outlet } from "react-router-dom";
import SocialMedia from "./SocialMedia/SocialMedia.jsx";
import "../../i18n.jsx";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../imports/ThemeContext.jsx";
import AboutMePage from "../AboutMe/AboutMe.jsx";
import Experience from "../Experience/Experience.jsx";
import Projects from "../Projects/Projects.jsx";
import Skills from "../Skills/Skills.jsx";
import { Element,Link } from "react-scroll";
import Hero from "../Hero/Hero1.jsx";

const Template = () => {
  //Change background
  const { isDarkMode, toggleTheme } = useTheme();
  //Change language
  const [userLanguage, setUserLanguage] = useState("en"); // Estado para el idioma
  const { i18n } = useTranslation();
  useEffect(() => {
    // change language with user navegator
    i18n.changeLanguage(navigator.language);
  }, []);
  //hide menu
  const [isHeroActive, setIsHeroActive] = useState(true);
  // change language
  const changeLanguage = () => {
    if (userLanguage === "es") {
      setUserLanguage("en"); // update language
    } else {
      setUserLanguage("es"); // update language
    }
    i18n.changeLanguage(userLanguage); // changed with i18n
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
    if(to=== 'hero'){
      setIsHeroActive(true);
    }else if(to === 'about-me'){
      setIsHeroActive(false);
    }
  };

  return (
    <div
      className={`page w-full md:h-full overflow-x-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-[#000b0d] to-[#02335c] icon-color-dark text-white fill-white"
          : "bg-[#b8e5fa] "
      }`}
    >
      <div className="menu w-full h-14 fixed">
        <div className="grid grid-cols-5 gap-4">
          <Link
              to="hero"
              smooth={true} duration={500} offset={-56}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
            >
              <Logo className="col-span-4 " />
          </Link>
          <div className="col-start-5 w-12 grid grid-cols-2 gap-4 mr-10 md:mr-20 justify-center justify-self-center ">
            <button onClick={changeLanguage}>{userLanguage}</button>
            <button className="" onClick={toggleTheme}>
              {isDarkMode ? (
                <FaSun className="size-7 hover:text-[#f7c966]" />
              ) : (
                <IoMdMoon className="size-7 hover:text-[#3780e6]" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <Hero/>
        <div className="fixed left-0">
          <SocialMedia />
        </div>
        <div className={`fixed w-2/5 ${isHeroActive ? "invisible": "" }`}>
          <NavbarStruct setActiveScroll={handleSetActive}/>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <div className="basis-3/5	">  
           <Element name="about-me">
             <AboutMePage />
           </Element>
           <Element name="experience">
             <Experience />
           </Element>
           <Element name="projects">
             <Projects />
           </Element>

           <Element name="skills">
             <Skills />
           </Element>
           {/* <Element name="certificates">
             <Certificates />
           </Element> */}
           {/* <Element name="contactMe">
             <contactMe />
           </Element> */}
        </div>
      </div>
      {/* <div className="flex w-full h-full">
        <div className=" flex md:overflow-hidden fixed">
          <div className="social-media h-screen">
             <SocialMedia />
           </div>
           <div className="about-me-menu w-1/2 ">
             <NavbarStruct name={isDarkMode} />
           </div>
        </div>
        <div className="bg-slate-600 w-1/2 flex justify-end justify-self-end">

        </div>
      </div> */}
    </div>
  );
};

export default Template;