import { useEffect, useState, React } from "react";
import "./template.css";
import Logo from "./LogoAnimation/Logo.jsx";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa6";
import NavbarStruct from "./Navbar/NavbarDesktop.jsx";
import NavbarMobile from "./Navbar/NavbarMobile.jsx";
// import { Outlet } from "react-router-dom";
import SocialMedia from "./SocialMedia/SocialMedia.jsx";
import "../../i18n.jsx";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../imports/ThemeContext.jsx";
import AboutMePage from "../AboutMe/AboutMe.jsx";
import Experience from "../Experience/Experience.jsx";
import Projects from "../Projects/Projects.jsx";
import Skills from "../Skills/Skills.jsx";
import { Element, Link } from "react-scroll";
import Hero from "../Hero/Hero1.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

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
  //hide menu in desktop
  const [isHeroActive, setIsHeroActive] = useState(true);
  //menu mobile
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [offset, setOffset] = useState(0);
  // change language
  const changeLanguage = () => {
    if (userLanguage === "es") {
      setUserLanguage("en"); // update language
    } else {
      setUserLanguage("es"); // update language
    }
    i18n.changeLanguage(userLanguage); // changed with i18n
  };

  //en prueba
  useEffect(() => {
    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    // console.log('ancho',ancho);
    // console.log('alto',alto);
  }, []);

  // diplay menu .
  const handleMenuMobile = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    if (to === "hero") {
      setIsHeroActive(true);
      setOffset(-400);
    } else if (to === "about-me") {
      setIsHeroActive(false);
      setOffset(-56);
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
      <div
        className={`menu w-full h-14  ${
          isHeroActive
            ? "relative"
            : "transform transition-opacity duration-500 fixed opacity-100 visible"
        }`}
      >
        <div
          className={`grid grid-cols-5 gap-4 ${
            isDarkMode
              ? "bg-gradient-to-br from-[#000b0d] to-[#02335c] md:bg-none"
              : "bg-[#b8e5fa] md:bg-none"
          }`}
        >
          <div className="md:hidden col ">
            <button onClick={handleMenuMobile}>
              <GiHamburgerMenu className="ml-10 mt-7 size-5 hover:text-[#3780e6] active:text-[#3780e6]" />
            </button>
          </div>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            offset={-56}
            spy={true}
            activeClass="active"
            onSetActive={handleSetActive}
            className=" justify-center col items-center text-center"
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
        {/* <div className="w-full grid justify-end gap-4">
          <a href="#" className=" mr-36 mt-5">
            Hablamos
          </a>
        </div> */}
      </div>

      {showMobileMenu ? (
          <div className={`w-full z-10 ${isHeroActive
            ? "relative ": "fixed top-16"} ${isDarkMode ? "bg-gradient-to-br from-[#000b0d] to-[#02335c] text-center" : "bg-[#b8e5fa]"}`}>
                
                <NavbarMobile setActiveScroll={handleSetActive} setShowMenu={handleMenuMobile} offset={offset}/>
              </div>
            ) : (
              ""
            )}
        <Element name="hero">
          <Hero />
        </Element>
        <div
          className={`left-0 ${
            isHeroActive
              ? "invisible md:visible"
              : "fixed  bottom-10 md:bottom-0 "
          }`}
        >
          <SocialMedia />
        </div>
        <div
          className={`w-2/5 fixed z-10 transform transition-opacity duration-500 ${
            !isHeroActive ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <NavbarStruct setActiveScroll={handleSetActive} />
        </div>
      <div className="md:flex md:flex-row-reverse">
        <div className="md:basis-3/5	">
          <Element name="about-me">
            <AboutMePage />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          {/* <Element name="projects">
            <Projects />
          </Element> */}

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
    </div>
  );
};

export default Template;
