import { NavLink } from "react-router-dom";
import './NavbarStruct.css';
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../imports/ThemeContext";

function NavbarStruct() {
  //changed background
  const { isDarkMode } = useTheme();
  //changed languague
  const { t } = useTranslation();
  //menu section names
  const menus = [
    {
      id:1,
      name: t('aboutMe'),
      link: "/",
    },
    {
      id:2,
      name: t('experience'),
      link: "/Experience",
    },
    {
      id:3,
      name: t('projects'),
      link: "/Projects",
    },
    {
      id:4,
      name: t('skills'),
      link: "/Skills",
    },
    {
      id:5,
      name: t('certificates'),
      link: "/Certificates",
    },
    {
      id:6,
      name: t('contactMe'),
      link: "/ContactMe",
    }
  ];
  return (
    <div className="navbar w-full md:mt-10 md:ml-10 md:mr-10">
      <h1 className="md:pt-10 text-5xl	font-name ">Claudia Cruz </h1>
      <h1 className="mt-5 text-2xl">{t('ocupation')}</h1>
      <p className="mt-5 w-10/12 mb-10">{t('introByMe')}</p> 
        {menus?.map((menu) => (
          <NavLink key={menu.id} className="nav group flex items-center py-3 "  to={menu?.link}>
            <span className={`mr-4 h-1 w-8  group-hover:w-12 ${ isDarkMode
              ? "bg-slate-300 group-hover:bg-white" : "bg-slate-700 group-hover:bg-black"
            }`}></span>
            <p className={`text-lg leanding-5  group-hover:text-2xl ${isDarkMode
            ? "text-slate-300 group-hover:text-white "
            : "text-slate-700 group-hover:text-black "}`}>
              {menu?.name}
            </p>
          </NavLink>
        ))}
    </div>
  );
};
export default NavbarStruct;
