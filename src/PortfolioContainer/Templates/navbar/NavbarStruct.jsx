import Logo from "../../../../public/images/logo.svg";
import { NavLink } from "react-router-dom";
import './NavbarStruct.css';
const NavbarStruct = () => {
  const content = (<div></div>); 
  return (
    <div className="navbar w-full mb-0 ">
      <nav className="bg-[#fff6e7]">
        <div className="h-10vh flex justify-between flex-1">
          <div className="w-full flex items-center">
            <NavLink to="/">
              <img alt="imagen logo" className="w-6/12" src={Logo} />
            </NavLink>
            <div className="w-full lg:flex md:flex lg: flex-1 items center justify-center mr-2.5">
              <div className="flex-10 ">
                <ul className="flex  gap-8 mr-16 text-3xl	">
                  <NavLink to="/">
                    <li className="py-7">Inicio</li>
                  </NavLink>
                  <NavLink to="/AboutMe">
                    <li className="py-7">Sobre mi</li>
                  </NavLink>
                  <NavLink to="/ContactMe">
                    <li className="py-7 ">Contacto</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavbarStruct;
