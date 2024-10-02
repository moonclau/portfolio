import { FaLinkedin ,FaFileCsv} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
const SocialMedia = () => {
    return (
        <div className="social-media md:relative h-full w-7 ml-5 mr-2">
            <div className="md:absolute md:inset-x-0 md:bottom-28 ">
                <FaLinkedin className="mb-3 size-7 "/>
                <FaGithubSquare className="mb-3 size-7 "/>
                <IoMdMail className="mb-3 size-7 "/>
                <FaFileCsv className="size-7 "/>
            </div>
        </div>
    );
};

export default SocialMedia;