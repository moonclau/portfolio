import React from "react";
import "./Navbar.css";

function NavbarStructure(props) {
  //menu section names
  const menus = [
    {
      id: 1,
      name: t("aboutMe"),
      link: "about-me",
    },
    {
      id: 2,
      name: t("experience"),
      link: "experience",
    },
    {
      id: 3,
      name: t("projects"),
      link: "projects",
    },
    {
      id: 4,
      name: t("skills"),
      link: "skills",
    },
    {
      id: 5,
      name: t("certificates"),
      link: "certificates",
    },
    {
      id: 6,
      name: t("contactMe"),
      link: "contactMe",
    },
  ];
  return (
    <div>
    </div>
  );
}
export default NavbarStructure;
