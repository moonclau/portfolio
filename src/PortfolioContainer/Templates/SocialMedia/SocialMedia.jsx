import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaFileCsv } from "react-icons/fa6";
const SocialMedia = () => {
    return (
        <div className="social-media relative h-full w-7 ml-2 mr-2">
            <div className="absolute inset-x-0 bottom-28 ">
                <FaLinkedin className="mb-3 size-7 "/>
                <FaGithubSquare className="mb-3 size-7 "/>
                <IoMdMail className="mb-3 size-7 "/>
                <FaFileCsv className="size-7 "/>
            </div>
        </div>
    );
};

export default SocialMedia;