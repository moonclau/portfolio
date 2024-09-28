import NavbarStruct from "./navbar/NavbarStruct.jsx";
import { Outlet } from "react-router-dom";
import Experience from "../Experience/Experience.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
const Template = () => {
    return (
        <div className="page">
            <NavbarStruct/>
            <div className="content w-full">
                <div className="template-body">
                    <Outlet />
                    <Experience/>
                    <AboutMe />
                </div>
            </div>
        </div>
    );
};

export default Template;