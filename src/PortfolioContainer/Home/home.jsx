import "./home.css";
import sunFlower from "./../../../public/images/girasol.svg";
import perfilFoto from "./../../../public/images/perfilfoto.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function home() {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse bg-[#fff6e7]">
      <div className="w-full flex items-center justify-center justify-self-center text-center">
        <div className="grid grid-rows-1 ">
          <div className="grid grid-cols-2 place-self-center">
            <p className="text-3xl mr-1">Hola, soy Clau </p>
            <MdOutlineWavingHand className="size-8" />
          </div>
          <h1 className="text-5xl	text-orange-500">Desarrollador Web</h1>
          <div className="text-lg text-left">
            Soy desarrollador fullstack con experiencia en la
            <br />
            creación y mantenimiento de aplicaciones web.
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <button className="flex items-center justify-center bg-[#fddab2] font-bold py-1 px-1 rounded-lg hover:bg-orange-500 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-500 focus:text-white hover:text-white">
              <FaGithub className="size-8 mr-2" />
              GitHub
            </button>
            <button className="flex items-center justify-center bg-[#fddab2] font-bold py-1 px-1 rounded-lg hover:bg-orange-500 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-500 focus:text-white hover:text-white">
              <FaLinkedin className="size-7 mr-2" />
              Linkedin
            </button>

            <button className="flex items-center justify-center bg-[#fddab2] font-bold py-1 px-1 rounded-lg hover:bg-orange-500 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-500 focus:text-white hover:text-white">
              <MdEmail className="size-7 mr-2" />
              correo
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center md:mr-2 md:pr-10 md:pb-0 pb-2">
        <img alt="imagen logo" className="w-4/5 md:w-2/3" src={perfilFoto} />
      </div>
    </div>
  );
}
export default home;
