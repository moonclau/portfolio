import { useTranslation } from "react-i18next";

function Experience() {
  //changed languague
  const { t } = useTranslation();
  // const jobs={

  // }
    return (
      <section id="experience" className="w-full m-5 ">
          <h1 className="text-3xl mb-5 text-center ">{t("carrer")}</h1>
        <div className="w-full flex justify-center align-middle justify-items-center">
          <div className="w-4/5 h-1  bg-[#3780e6] mb-5 "></div>
        </div>
        <div className="group ">
          <ul>
            <li>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  export default Experience;
  