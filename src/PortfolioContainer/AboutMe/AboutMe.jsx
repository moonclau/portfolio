import { useTranslation } from "react-i18next";
import Photo from "../../assets/images/perfil.png";
function AboutMe() {
  //changed languague
  const { t } = useTranslation();
  return (
    <section id="about-me" className="w-full grid mt-20">
      <div className="w-full h-fit flex justify-center">
        <img className="w-2/5 mb-5" src={Photo} alt="perfil foto" />
      </div>
      <div className="ml-16 md:ml-20 mr-10 md:mr-20">
        <div className="text-2xl  justify-center text-center font-bold ">
         <h2 className="m-1 mb-5">
         {t("greeting")}
        </h2> 
        {/* <h2 className="mb-5">
          {t("welcome")}
        </h2> */}
        </div>
        <div className="w-full text-xl justify-center md:text-justify">
          <div>{t("describingMyself")}</div>
          <div className="mt-3">{t("describingMyself1")}</div>
          <div className="mt-3" >{t("describingMyself2")}</div>
        </div>
      </div>

      {/* <div className="w-full flex md:flex-row flex-col-reverse  ">
        <div className="w-full p-5 md:ml-32 md:mt-20 justify-center items-center">
          <h1 className="text-2xl font-bold m-2">
            Hola Soy Claudia. ¡Bienvenido a mi pedazito de web!
          </h1>

          <p className=" ">
            Tengo 4 años trabajando como desarrollador fullstack en la creación
            y mantenimiento de aplicaciones web.
          </p>
          <p>
            En mis tiempos libres, disfruto diseñando landing pages, lo que me
            permite explorar mi creatividad y mejorar mis habilidades de diseño.
          </p>
          <p>
            Me apasionaona el aprendizaje continuo y la mejora de mis
            habilidades para contribuir de manera significativa a proyectos
            digitales.
          </p>
        </div> */}
      <div className="flex justify-center items-center text-center md:mr-2 md:pr-10 md:pb-0 pb-2">
        {/* <img className="w-2/3	" alt="imagen logo" src={Draw} /> */}
      </div>
      {/* </div> */}
    </section>
  );
}
export default AboutMe;
