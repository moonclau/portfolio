import { FaLinkedin ,FaFileCsv} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
const SocialMedia = () => {
    return (
        <div className="w-7 mb:ml-5 mb:mr-2">
            <div className="md:absolute md:inset-x-0 md:bottom-20 ml-5">
                <a href="https://www.linkedin.com/in/claudia-itzel-cruz-hern%C3%A1ndez-85a8531b1/" className="" target="_blank">
                    <FaLinkedin className="mb-3 size-7 hover:text-[#3780e6]"/>
                </a>
                <FaGithubSquare className="mb-3 size-7 hover:text-[#3780e6]"/>
                <IoMdMail className="mb-3 size-7 hover:text-[#3780e6]"/>
                <FaFileCsv className="size-7 hover:text-[#3780e6]"/>
            </div>
        </div>
        

    );
};

export default SocialMedia;