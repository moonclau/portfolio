import React from "react";
import "./Skills.css";
import {dataTecnicalSkills} from "../../data/tecnicalSkills.js";
import {tecnicalSkills} from "../../data/tecnical.js"
import { useTranslation } from "react-i18next";
import {softSkills} from "../../data/softSkills.js";
function Skills() {
    //changed languague
    const { t } = useTranslation();
  return (
    <section id="skills" className="w-4/5 ml-14 md:ml-20 md:mr-20">
      {dataTecnicalSkills.map((category) => (
        <div key={category.id} className="mb-2">
          <h1 className="mb-1 mt-5 flex text-xl font-bold">{category.type}</h1>
          <ul className="skills grid grid-cols-3  md:grid-cols-5 gap-4 justify-center justify-items-center text-center">
            {category.skill.map((skill) => (
              <li key={skill.id}>
                <h3 className="w-full pl-2 pr-2 mt-1 mb-2 text-sm font-semibold">
                  {skill.namekill}
                </h3>

                <div
                  className={`size-20 file flex justify-end group`}
                >
                  <img
                    className="size-8 group-hover:size-7 mt-7 mr-3 "
                    src={skill.image}
                    alt={skill.namekill}
                  />
                </div>
                {/* <div className="w-full size-20 bg-gray-200 rounded-full h-2 dark:bg-[#000b0d]">
                  <div
                    className={`bg-[#3780e6] h-2 rounded-full w-[${skill.percentage}]`}
                  ></div>
                </div> */}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {tecnicalSkills.map((category) => (
        <div key={category.id} className="mb-2 ">
          <h1 className="mb-1 mt-5 flex text-xl font-bold">{t(category.type)}</h1>
          <ul className="skills grid grid-cols-3 md:grid-cols-5 gap-4 justify-center justify-items-center text-center">
            {category.skill.map((skill) => (
              <li key={skill.id} className=" text-center justify-center">
                <h3 className="w-full pl-2 pr-2 mt-1 mb-2 text-sm font-semibold">
                  {skill.namekill}
                </h3>
                <div className="flex justify-center">
                <img
                  className="size-12 group-hover:size-7"
                  src={skill.image}
                  alt={skill.namekill}
                />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

{softSkills.map((category) => (
        <div key={category.id} className="mb-2 ">
          <h1 className="mb-1 mt-5 flex text-xl font-bold">{t(category.type)}</h1>
          <ul className="skills grid grid-cols-2 md:grid-cols-5 gap-4 justify-center justify-items-center text-center">
            {category.skill.map((skill) => (
              <li key={skill.id} className=" text-center justify-center">
                <h3 className="w-full pl-2 pr-2 mt-1 mb-2 text-sm font-semibold">
                  {t(skill.namekill)}
                </h3>
                <div className="flex justify-center">
                <img
                  className="size-12 group-hover:size-7"
                  src={skill.image}
                  alt={skill.namekill}
                />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Skills;
