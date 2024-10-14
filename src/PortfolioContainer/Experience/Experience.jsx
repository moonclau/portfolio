import { useTranslation } from "react-i18next";
import { useTheme } from "../../imports/ThemeContext";
import { MdArrowOutward } from "react-icons/md";

function Experience() {
  //changed languague
  const { t } = useTranslation();
  //changed background
  const { isDarkMode } = useTheme();
  //informations about jobs experience
  const dataExperience = [
    {
      id: 1,
      title: "Aerobit S.A. de C.V.",
      link: "https://aerobit.com/",
      date: "2021-2024",
      subtitle: t("ocupation"),
      description:
        "Atención al cliente, gestionando y resolviendo tickets para solucionar problemas y recolectar requerimientos para su implementación en actualizaciones. Colaboración activa en el mantenimiento y actualización de diversas plataformas web, asegurando un rendimiento óptimo y una experiencia de usuario mejorada.",
      technologies: [
        "php",
        "ruby",
        "css",
        "javascript",
        "laravel",
        "ruby on rails",
        "vue",
        "reactJS",
        "quasar",
        "bootstrap",
        "postgress",
        "mysql",
      ],
    },
    {
      id: 2,
      title: "Amats Electric S.A. de C.V.",
      link: "https://www.amats.com.mx/",
      subtitle: "Auxiliar de Marketing Digital",
      date: "2020-2021",
      description:
        "Creación y publicación de contenido relevante para atraer leads en diferentes redes sociales. Además de la colaboración en Mantenimiento y actualización de la página web",
      technologies: ["php", "css", "javascript", "laravel", "bootstrap"],
    },
  ];
  return (
    <section id="experience" className="w-full md:m-5 md:mt-20 ">
      {/* <h1 className="text-3xl mb-5 text-center mt-20">{t("carrer")}</h1>
      <div className="w-full flex justify-center align-middle justify-items-center mb-10">
        <div className="w-4/5 h-1  bg-[#3780e6] mb-5 "></div>
      </div> */}
      <ul className="w-11/12 ml-10">
        {dataExperience?.map((job) => (
          <li key={job.id} className={`flex flex-row group mb-5 rounded-md pa-2 ${isDarkMode ? "hover:bg-slate-900/50  " : "hover:bg-sky-400/20"} `}>
            <div className="basis-1/5">
              <div
                className={`ml-10 mt-6 ${
                  isDarkMode ? "text-gray-300 " : "text-slate-900 "
                }`}
              >
                {job.date}
              </div>
            </div>
            <div className="basis-4/5">
              <h3 className="mb-1 mt-5 flex text-2xl group-hover:text-[#3780e6]">
                <a href={job.link} >{job.title}</a><MdArrowOutward className="ml-2 group-hover:animate-bounce" />
              </h3>
              <h4
                className={`text-lg mb-1 ${
                  isDarkMode ? "text-gray-300 " : "text-slate-900"
                }`}
              >
                {job.subtitle}
              </h4>
              <p
                className={`w-11/12 mb-3 ${
                  isDarkMode ? "text-gray-300 " : "text-slate-900"
                }`}
              >
                {job.description}
              </p>
              <ul className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-2 mr-7 w-4/5 mb-5">
                {job.technologies?.map((tecnology, index) => (
                  <li
                    key={job.id + index}
                    className={`text-sm font-medium  rounded-full w-auto h-7 content-center text-center ${
                      isDarkMode
                        ? "bg-blue-400 bg-opacity-20 to-transparent text-sky-100"
                        : "bg-blue-500 bg-opacity-50 to-transparent text-white "
                    }`}
                  >
                    {tecnology}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
        <a className="text-2xl font-semibold md:ml-20 flex group hover:text-[#3780e6]" href="#project">
          Ver más <MdArrowOutward className="ml-2 group-hover:animate-bounce" />
        </a>
    </section>
  );
}
export default Experience;
