import React from "react";
import { Link,Events } from "react-scroll";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../imports/ThemeContext";

function NavbarMobile(props) {
    //changed background
    const { isDarkMode } = useTheme();
    //changed languague
    const { t } = useTranslation();
  //menu section names
  const menus = [
    {
      id: 1,
      name: t("aboutMe"),
      link: "about-me",
    },
    {
      id: 2,
      name: t("experience"),
      link: "experience",
    },
    {
      id: 3,
      name: t("projects"),
      link: "projects",
    },
    {
      id: 4,
      name: t("skills"),
      link: "skills",
    },
    {
      id: 5,
      name: t("certificates"),
      link: "certificates",
    },
    {
      id: 6,
      name: t("contactMe"),
      link: "contactMe",
    },
  ];
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
                {/* {} */}
              <p
                className={`text-lg leanding-5  group-hover:text-2xl ${
                  isDarkMode
                    ? "text-slate-300 group-hover:text-white "
                    : "text-slate-700 group-hover:text-[#3780e6] "
                }`}
              >
                {menu?.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavbarMobile;
