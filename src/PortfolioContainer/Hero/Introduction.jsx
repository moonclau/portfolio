import React from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

function Introduction() {
    //changed languague
    const { t } = useTranslation();
    return (
      <div className="font-bold">
        <div id="title" >
          <p className="text-2xl">{t("hi")},</p>
          <h1 className="text-4xl">{t("myself")}</h1> 
        </div>
      {/* <ScrollLink
            to="about-me"
            smooth={true}
            duration={800}
            className="absolute mt-8 p-4 bg-blue-500 text-white rounded cursor-pointer"
          >
            <p>{t("seeMore")}</p>
          </ScrollLink> */}
      {/* <h3 className="text-lg">
        Con más de 4 años de experiencia construyendo aplicaciones y sitios web dinámicos y eficientes.
      </h3> */}
      </div>
    );
  }
  export default Introduction;