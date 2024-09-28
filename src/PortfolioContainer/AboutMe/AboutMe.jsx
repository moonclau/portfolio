import Draw from "./../../../public/images/animacion.png";
function AboutMe() {
  return (
    <div className="w-full bg-[#fff6e7] ">
      <div className="flex justify-center ">
        <h1 className="mt-20 text-3xl ">Sobre Mi</h1>
      </div>
      <div className="w-full flex justify-center">
        <hr className="md:w-2/4 border-orange-500 mt-5"></hr>
      </div>
      <div className="w-full flex md:flex-row flex-col-reverse  ">
        <div className="w-full p-5 md:ml-32 md:mt-20 justify-center items-center">
          <h1 className="text-2xl font-bold m-2">
            Hola Soy Claudia. ¡Bienvenido a mi pedazito de web!
          </h1>
         
          

          <p className=" ">
            Tengo 4 años trabajando como desarrollador fullstack en la creación
            y mantenimiento de aplicaciones web.
          </p>
          <p>En mis tiempos libres, disfruto
            diseñando landing pages, lo que me permite explorar mi creatividad y
            mejorar mis habilidades de diseño.
            </p>
            <p>Me apasionaona el aprendizaje
            continuo y la mejora de mis habilidades para contribuir de manera
            significativa a proyectos digitales.
            </p>

        </div>
        <div className="flex justify-center items-center text-center md:mr-2 md:pr-10 md:pb-0 pb-2">
          <img className="w-2/3	" alt="imagen logo" src={Draw} />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
