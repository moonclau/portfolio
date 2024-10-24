import React from "react";
import { Link,Events } from "react-scroll";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../imports/ThemeContext";
import {menus} from "../../../data/menu.js";

function NavbarMobile(props) {
    //changed background
    const { isDarkMode } = useTheme();
    //changed languague
    const { t } = useTranslation();
  
  return (
    <nav className="relative flex justify-center">
      <ul>
        {menus?.map((menu) => (
          <li key={menu.id}>
            <Link
              className={`nav group flex items-center py-3 }`}
              to={menu?.link}
              smooth={true}
              duration={500}
              offset={props.offset}
              spy={true}
              activeClass="active"
              onSetActive={props.setActiveScroll}
              onClick={props.setShowMenu}
            >
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
  );
}
export default NavbarMobile;
