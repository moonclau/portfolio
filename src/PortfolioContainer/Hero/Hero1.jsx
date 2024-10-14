import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div id="hero" className="hero w-full h-screen flex flex-col justify-center items-center text-center sticky top-0">
      <h1 className="text-5xl font-bold">Hola, Soy Desarrollador Web</h1>
      <ScrollLink
        to="about-me"
        smooth={true}
        duration={800}
        className="mt-8 p-4 bg-blue-500 text-white rounded cursor-pointer"
      >
        Descubre más
      </ScrollLink>
    </div>
  );
};

export default Hero;
