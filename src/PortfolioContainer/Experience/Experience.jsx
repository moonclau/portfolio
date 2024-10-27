import { useTranslation } from "react-i18next";
import { useTheme } from "../../imports/ThemeContext";
import { MdArrowOutward } from "react-icons/md";
import { dataExperience } from "../../data/dataExperience";
import CvPdf from "../../assets/pdf/Certificates/ClaudiaCruz.pdf";

function Experience() {
  //changed languague
  const { t } = useTranslation();
  //changed background
  const { isDarkMode } = useTheme();
  
  return (
    <section id="experience" className="w-full mr-5 md:m-5 md:mt-20  ">
      <ul className="w-4/5 md:w-11/12 ml-10">
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
                {t(job.subtitle)}
              </h4>
              <p
                className={`w-11/12 mb-3 ${
                  isDarkMode ? "text-gray-300 " : "text-slate-900"
                }`}
              >
                {t(job.description)}
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-2 mr-7 w-4/5 mb-5">
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
        <a className="text-2xl font-semibold ml-20 mb-20 flex group hover:text-[#3780e6]" href={CvPdf}>
          Ver más <MdArrowOutward className="ml-2 group-hover:animate-bounce" />
        </a>
    </section>
  );
}
export default Experience;
