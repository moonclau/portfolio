import "./home.css";
import sunFlower from "./../../../public/images/girasol.svg";
import perfilFoto from "./../../../public/images/perfilfoto.png";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

function home() {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 ">
      <div className="w-full col-span-2 info-profile">
        <div className="w-full ">
          <div className="w-full ">
            <h1 className="text-5xl flex justify-center items-center mt-44  text-white">Hola, soy Clau</h1>
            <h2 className="text-3xl flex justify-center items-center mt-5  ml-12  text-white">Desarrollador FullStack</h2>
          </div>
          <div className="w-full h-5 flex justify-center items-center">
            <div className="w-3/12 grid grid-cols-4 pt-5 mt-5  ml-20 grid-rows-1 ">
              <div><FaGithubSquare className="text-white text-4xl"/></div>
              <div><FaLinkedin className="text-white text-4xl"/></div>
              <div><IoMdMail className="text-white text-4xl"/></div>
              <div><TbFileCv className="text-white text-4xl"/></div>
            </div>
          </div>
            <div className="w-full  flex justify-center items-center mt-10 ml-8 pt-5">
                <button className="w-44 bg-[#fb8500] ml-5 p-3 rounded-3xl text-white focus:shadow-outline hover:bg-[#ffb703]">Contrátame</button>
                </div>
          
          <img alt="sunflower" className="w-16 mt-10 ml-20" src={sunFlower} />

        </div>

      </div>
      <div className="flex justify-center items-center col-start-3 mr-2 pr-10">
        <img alt="imagen logo" className="" src={perfilFoto} />
      </div>
    </div>
  );
}
export default home;
