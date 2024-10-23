import AWS from "../assets/images/iconsSkills/aws.svg";
import DigitalOcean from "../assets/images/iconsSkills/DigitalOcean.svg";
import Ubuntu from '../assets/images/iconsSkills/ubuntu.svg';
import Windows from "../assets/images/iconsSkills/windows.svg";
import MacOs from "../assets/images/iconsSkills/macOs.svg";
import Scrum from "../assets/images/iconsSkills/scrum.svg";

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
