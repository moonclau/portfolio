
import React from 'react';
import ProgressCircle from '../../imports/ProgressCircle.jsx';
import htmlImage from '../../../public/images/iconsSkills/html1.svg'
function Skills() {
  const dataSkills=[
  {id:1,
   type:"Web",
   skill:[
    {
      namekill: "HTML",
      percentage:90,
      image:{htmlImage}
    },
    // {
    //   namekill: "CSS",
    //   percentage:80,
    //   image:""
    // },
    // {
    //   namekill: "JavaScript",
    //   percentage:70,
    //   image:""
    // }
   ] 
  },
  // {id:2,
  //  type:"FrontEnd",
  //  skill:[
  //   {
  //     namekill: "Bootstrap",
  //     percentage:70,
  //     image:""
  //   },
  //   {
  //     namekill: "Tailwind css",
  //     percentage:90,
  //     image:""
  //   },
  //   {
  //     namekill: "React Js",
  //     percentage:50,
  //     image:""
  //   },
  //   {
  //     namekill: "Vue Js",
  //     percentage:50,
  //     image:""
  //   },
  //  ] 
  // },
  // {id:3,
  //  type:"BackEnd",
  //  skill:[
  //   {
  //     namekill: "Laravel",
  //     percentage:80,
  //     image:""
  //   },
  //   {
  //     namekill: "SpringBoot",
  //     percentage:80,
  //     image:""
  //   },
  //   {
  //     namekill: "Ruby on Rails",
  //     percentage:50,
  //     image:""
  //   },
  //  ] 
  // },
  // {id:4,
  //  type:"Sistema gestor de base de datos",
  //  skill:[
  //   {
  //     namekill: "Mysql",
  //     percentage:70
  //   },
  //   {
  //     namekill: "Postgress SQL",
  //     percentage:70
  //   }
  //  ] 
  // },
  // {id:5,
  //  type:"plataformas de CMS",
  //  skill:[
  //   {
  //     namekill: "Wordpress",
  //     percentage:50,
  //     image:""
  //   },
  //   {
  //     namekill: "Drupal",
  //     percentage:20,
  //     image:""
  //   },
  //  ] 
  // }
  ];
    return (
      <section id="skills" className="w-full ml-20 mr-20">
        <h1 className="mb-1 mt-5 flex text-2xl font-bold ">Web</h1>
        {dataSkills.map(category => (
        <div key={category.id}>
          <h2>{category.type}</h2>
          <ul className="skills flex">
            {category.skill.map(skill => (
              <li key={category.id}>
                  <ProgressCircle
                  key={skill.namekill}
                  percentage={skill.percentage}
                  name={skill.namekill}
                  image={skill.image}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
{/* {htmlImage} */}
<img src={htmlImage}/>
      </section>
    );
  }
  export default Skills;