import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Hero1.css";
import Hill1 from "../../../public/images/landscape/colina1.png";
import Hill2 from "../../../public/images/landscape/colina2.png";
import Hill3 from "../../../public/images/landscape/colina3.png";
import women from "../../../public/images/landscape/mujer.png";
const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  // Manejador del scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="hero" className="hero w-full h-screen">
      <section className="night_landscape">
        
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="forest hill1 "></div>
        <div id="title" className="font-bold">
          <p className="text-2xl">Hola,</p>
          <h1 className="text-4xl"> Soy Desarrollador Full Stack</h1> 
          
          {/* <h3 className="text-lg">
            Con más de 4 años de experiencia construyendo aplicaciones y sitios web dinámicos y eficientes.
          </h3> */}
          
        </div>
        <img className="absolute" src={Hill1} alt="hill right" 
        style={{ transform: `translateX(${scrollY * 0.9}px)` }} />
        <img className="absolute" src={Hill3} alt="hill center" 
        style={{ transform: `translateX(${-scrollY * 0.9}px)` }} />
        <img className="absolute " src={Hill2} alt="hill center"
        style={{ transform: `translateX(${scrollY * 2}px)` }}  />
        <img className="absolute " src={women} alt="hill center" 
        style={{ transform: `translateX(${scrollY * 0.9}px)` }}/>


<ScrollLink
        to="about-me"
        smooth={true}
        duration={800}
        className="absolute mt-8 p-4 bg-blue-500 text-white rounded cursor-pointer"
      >
        Descubre más
      </ScrollLink>
      </section>

      {/* <h1 className="text-5xl font-bold">Hola, Soy Desarrollador Web</h1>
      <ScrollLink
        to="about-me"
        smooth={true}
        duration={800}
        className="mt-8 p-4 bg-blue-500 text-white rounded cursor-pointer"
      >
        Descubre más
      </ScrollLink> */}
    </div>
  );
};

export default Hero;
