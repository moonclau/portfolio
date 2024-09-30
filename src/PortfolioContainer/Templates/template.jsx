// import NavbarStruct from "./navbar/NavbarStruct.jsx";
// import { Outlet } from "react-router-dom";
import SocialMedia from "./SocialMedia/SocialMedia.jsx";
import './template.css';
import Logo from './LogoAnimation/Logo.jsx';
const Template = () => {
    return (
        <div className="page w-full md:overflow-hidden md:h-screen">
        <div className="menu w-full h-16 bg-blue-600">
            <Logo/>
        </div>
        <div className="flex w-full h-full">
            <div className="social-media">
                <SocialMedia/>
            </div>
            <div className="about-me w-2/5 bg-yellow-100">about me</div> 
            <div className=" este" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus volutpat tincidunt. Ut tortor urna, consectetur non neque at, elementum iaculis dui. Morbi pretium augue in mi accumsan vulputate. Nulla sodales magna quis sapien consequat ultrices. Suspendisse condimentum lectus sit amet erat tincidunt hendrerit. Mauris sollicitudin ac lectus sed interdum. Mauris dapibus ex nisi, vel tempus purus vulputate non. In vel massa nulla.
            </div>  
        </div>
        <div/>
    </div>
    );
};

export default Template;