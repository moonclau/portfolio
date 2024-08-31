import NavbarStruct from "./navbar/NavbarStruct.jsx";
import { Outlet } from "react-router-dom";

const Template = () => {
    return (
        <div className="page">
            <NavbarStruct/>
            <div className="content w-full">
                <div className="template-body">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Template;