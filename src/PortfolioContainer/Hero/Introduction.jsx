import React from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

function Introduction() {
    //changed languague
    const { t } = useTranslation();
    return (
      <div className="font-bold">
        <div id="title"  className="top-1/4  lg:top-[40%]">
          <p className="text-2xl">{t("hi")},</p>
          <h1 className="text-2xl md:w-full md:text-4xl">{t("myself")}</h1> 
        <h3 className="text-lg">
          {t("briefIntroduction")}
        </h3>
        </div>
      </div>
    );
  }
  export default Introduction;