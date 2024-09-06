import "./home.css";
import sunFlower from "./../../../public/images/girasol.svg";
import perfilFoto from "./../../../public/images/perfilfoto.png";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { MdOutlineWavingHand } from "react-icons/md";

function home() {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 bg-[#fff6e7]">
      <div className="w-full flex items-center justify-center justify-self-center text-center">
          
        <div className="grid grid-rows-1 ">
          <div className="grid grid-cols-2 place-self-center">
            <p className="text-3xl mr-1">Hola, soy Clau </p>
            <MdOutlineWavingHand className="size-8"/>
          </div>
          <h1 className="text-5xl	text-orange-500">Desarrollador Web</h1>

            <div className="text-lg">Soy desarrollador fullstack con experiencia en la creación <br/>y mantenimiento de aplicaciones web.</div>  
        </div>
      </div>
      <div className="flex justify-center items-center  mr-2 pr-10">
        <img alt="imagen logo" className="" src={perfilFoto} />
      </div>
    </div>
  );
}
export default home;
