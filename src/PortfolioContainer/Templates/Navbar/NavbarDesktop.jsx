import React from "react";
import { Link,Events } from "react-scroll";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../imports/ThemeContext";
import {menus} from "../../../data/menu.js";
function NavbarDesktop(props) {
  //changed background
  const { isDarkMode } = useTheme();
  //changed languague
  const { t } = useTranslation();
  //menu section names
  
  return (

    <div className=" w-full md:ml-28 md:absolute bottom-5 ">
    <div className="menu-desktop h-screen hidden md:flex justify-center items-center">
      <div >
        <div >
          <h1 className="name  mt-10  text-5xl font-name ">Claudia Cruz </h1>
          <h1 className="ocupation mt-5 text-2xl">{t("ocupation")}</h1>
          <p className="introduction mt-5 w-10/12 mb-10 text-lg ">{t("introByMe")}</p>
        </div>
        <nav>
        <ul className={` ${isDarkMode? "menu-profile-dark" : "menu-profile"}`} >
          {menus?.map((menu) => (
            <li key={menu.id}>
            <Link
              className={`nav group flex items-center py-3 }`}
              to={menu?.link} 
              smooth={true} duration={500} offset={-56}
              spy={true}
              activeClass="active"
              onSetActive={props.setActiveScroll}
            >
              <span
                  className={`mr-4 h-1 w-8  group-hover:w-12 ${
                    isDarkMode
                      ? "bg-slate-300 group-hover:bg-white "
                      : "bg-slate-700 group-hover:bg-[#3780e6] active:bg-[#3780e6]"
                  }`}
                ></span>
                <p
                  className={`text-lg leanding-5  group-hover:text-2xl ${
                    isDarkMode
                      ? "text-slate-300 group-hover:text-white "
                      : "text-slate-700 group-hover:text-[#3780e6] "
                  }`}
                >
                  {t(menu?.name)}
                </p>
                </Link>
              </li>
          ))}
        </ul>
        </nav>
      </div>
    </div>
    
</div>
  );
}
export default NavbarDesktop;
