import React, { useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

import "./NavbarStruct.css";
const NavbarStruct = () => {
  const [sidebar, setSidebar] = useState(false);
  const menus = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Sobre mi",
      link: "/AboutMe",
    },
    {
      name: "Contacto",
      link: "/ContactMe",
    },
  ];
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="navba  ">
      <div className="w-full hidden sm:block bg-[#fff6e7]">
        <div className="h-10vh flex justify-between flex-1">
          <div className="w-full flex items-center ">
            <NavLink to="/">
              <img alt="imagen logo" className="w-6/12" src={Logo} />
            </NavLink>
            <div className="w-full lg:flex md:flex lg: flex-1 items center justify-center mr-2.5">
              <div className="flex-10 ">
                <ul className="flex gap-8 mr-16 text-3xl">
                  {menus?.map((menu,index) => (
                    <li className="py-7"  key={index} >
                      <NavLink to={menu?.link}>{menu?.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-[#ffce96]">
        <div className="relative flex items-center justify-between">
          <div className="w-full flex flex-row sm:hidden items-center justify-center ">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md size-10 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleSidebar}
            >
              <TiThMenu />
            </button>
            <div className="w-full flex justify-center items-center text-center">
              <img alt="imagen logo" className="size-16" src={Logo} />
            </div>
          </div>
        </div>
      </nav>
      {sidebar ? (
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-2 pt-2 bg-[#ffce96]">
              <ul>
                {menus?.map((menu,index) => (
                <li key={index} className="block rounded-md text-center px-3 py-2 text-base font-medium hover:bg-orange-500 hover:text-white focus:outline-none ">
                  <NavLink to={menu?.link}>{menu?.name}</NavLink>
                </li>
                ))}
              </ul>
          </div>
        </div>
         ) : (
        <div></div>
      )}
    </div>
  );
};
export default NavbarStruct;
