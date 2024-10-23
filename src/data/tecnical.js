import AWS from "../../public/images/iconsSkills/aws.svg";
import DigitalOcean from "../../public/images/iconsSkills/DigitalOcean.svg";
import Ubuntu from '../../public/images/iconsSkills/ubuntu.svg';
import Windows from "../../public/images/iconsSkills/windows.svg";
import MacOs from "../../public/images/iconsSkills/macOs.svg";
import Scrum from "../../public/images/iconsSkills/scrum.svg";

export const tecnicalSkills = [
  {
    id: 1,
    type: "cloud",
    skill: [

      {
        id: 1,
        namekill: "AWS",
        image: AWS,
      },
      {
        id: 2,
        namekill: "Digital Ocean",
        image: DigitalOcean,
      },
    ]
  },
  {
    id: 2,
    type: "OS",
    skill: [
      {
        id: 1,
        namekill: "Windows",
        image: Windows
      },
      {
        id: 2,
        namekill: "Ubuntu",
        image: Ubuntu
      },
      {
        id: 3,
        namekill: "MacOS",
        image: MacOs
      },
    ]
  },
  {
    id: 3,
    type: "methodologies",
    skill: [
      {
        id: 1,
        namekill: "Scrum",
        image: Scrum
      }
    ]
  }
];
