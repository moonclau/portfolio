// import NavbarStruct from "./navbar/NavbarStruct.jsx";
// import { Outlet } from "react-router-dom";
import NightLandscape from "../Templates/NightLandscape/NightLandscape.jsx";
import NightLandscapev2 from "../Templates/NightLandscape/NightLandscapev2.jsx";

const Template = () => {
    return (
        <div className="page">
            <NightLandscape/>
            {/* <NightLandscapev2/> */}
            {/* <NavbarStruct/>
            <div className="content w-full">
                <div className="template-body">
                    <Outlet />
                </div>
            </div> */}
        </div>
    );
};

export default Template;