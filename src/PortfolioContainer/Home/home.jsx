import "./home.css";
import perfilFoto from "../../assets/images/perfilfoto.png";
// import { FaLinkedin,MdOutlineWavingHand,FaGithub } from "react-icons/fa";
// import { TypeAnimation } from "react-type-animation";

function home() {
  return (
    <div className="w-full flex md:flex-row flex-col-reverse bg-[#fff6e7] pb-10">
      <div className="w-full flex items-center justify-center justify-self-center text-center">
        <div className="grid grid-rows-1 ">
          <div className="flex justify-center">
            <p className="text-3xl mr-2">Hola, soy Clau </p>
            {/* <MdOutlineWavingHand className="size-8" /> */}
          </div>
          <h1 className="text-lg	text-orange-500">
            
            {/* <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Desarrollador Web",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Desarrollador FrontEnd",
                1000,
                "Desarrollador BackEnd",
                1000,
                "Desarrollador Fullstack",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            /> */}
          </h1>
          <div className="text-lg text-left m-5 md:w-full md:m-10">
            Soy desarrollador fullstack con experiencia en la
            
            creación y mantenimiento de aplicaciones web.
          </div>
          <div className="grid grid-cols-3 gap-4  ml-2  mr-2 md:ml-10 md:mr-10">
            <button className="flex w-32 items-center justify-center bg-[#fddab2] font-bold py-1 px-1 rounded-lg hover:bg-orange-500 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-500 focus:text-white hover:text-white">
              {/* <FaGithub className="size-8 mr-2" /> */}
              GitHub
            </button>
            <button className="flex items-center justify-center bg-[#fddab2] font-bold py-1 px-1 rounded-lg hover:bg-orange-500 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-500 focus:text-white hover:text-white">
              {/* <FaLinkedin className="size-7 mr-2" /> */}
              Linkedin
            </button>

            <button className="flex items-center justify-center bg-[#fddab2] font-bold py-1 px-1 rounded-lg hover:bg-orange-500 active:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-500 focus:text-white hover:text-white">
              {/* <MdEmail className="size-7 mr-2" /> */}
              correo
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center md:mr-2 md:pr-10 md:pb-0 pb-2">
        <img alt="imagen logo" className="w-2/3" src={perfilFoto} />
      </div>
    </div>
  );
}
export default home;
