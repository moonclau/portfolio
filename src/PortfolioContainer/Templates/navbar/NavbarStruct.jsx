import Logo from "../../../../public/images/logo.svg";
import { NavLink } from "react-router-dom";
import './NavbarStruct.css';
import { useTranslation } from "react-i18next";
const NavbarStruct = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar w-full md:mt-10 md:ml-10 md:mr-10">
      <h1 className="md:pt-10 text-5xl	font-name ">Claudia Cruz </h1>
      <h1 className="mt-5 text-2xl">{t('ocupation')}</h1>
      <p className="mt-5 w-10/12 ">{t('introByMe')}</p> 
      <div className="flex mt-20">
        <div className=" h-6 justify-items-center"><div id="line" className="line-dark w-8 h-3  border-b-2"></div></div>
        <h3 className="ml-2">{t('aboutMe')}</h3>
      </div>
    </div>
  );
};
export default NavbarStruct;
