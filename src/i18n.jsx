import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en inglés y español
const resources = {
  en: {
    translation: {
      //a
      aboutMe:"About me",
      //b
      briefIntroduction:"With more than 4 years of experience building efficient applications and websites.",
      //c
      carrer:"My professional career",
      certificates:"Certificates",
      cloud:"Cloud",
      contactMe:"Contact me",
      //d
      describingMyself: "My projects focus on creating intuitive and functional user interfaces, optimizing the user experience and ensuring robust performance on both frontend and backend.",
      describingMyself1:"With a problem-solving mindset, I am an expert in transforming ideas into digital products, always looking for best practices in development, accessibility and design. My passion for graphic design allows me to have a special focus on visual details to ensure that each product not only works well, but also looks amazing.",
      describingMyself2:"I am looking for new opportunities where I can collaborate on challenging projects and bring my expertise in web development. If you're looking for someone committed, creatively and technically minded, I'd be happy to help you turn your ideas into reality.",
      //e
      empathy:"Empathy",
      experience:"Experience",
      //f
      //g
      greeting:"Hi I'm Claudia,",
      //h
      hi:"Hi",
      honest:"Honest",
      //i
      introByMe:"With my experience as a fullstack programmer, I can transform your ideas into reality. From a clean and friendly design for static pages to ambitious and complex web projects.",
      //j
      //k
      //l
      //m
      methodologies:"Methodologies",
      myself:"I´m Full Stack Developer",
      //n
      //o
      ocupation:"Full Stack developer",
      OS:"OS",
      //p
      projects:"Projects",
      //q
      //r
      responsable:"Responsability",
      //s
      seeMore:"See more",
      selfTaught:"Self Taught",
      skills:"Skills",
      softSkill:"Soft Skill",
      //t
      teamWork:"Team Work",
      //w
      welcome: "welcome to my little piece of web!",
      //x
      //y
      //z
      
    }
  },
  es: {
    translation: {
      
      aboutMe:"Sobre mi",
      briefIntroduction:"Con más de 4 años de experiencia construyendo aplicaciones y sitios web eficientes.",
      carrer:"Mi trayectoria profesional",
      certificates:"Certificados",
      cloud:"Nube",
      contactMe:"Contáctame",
      describingMyself: "Mis proyectos se centran en la creación de interfaces de usuario intuitivas y funcionales, optimizando la experiencia del usuario y asegurando un rendimiento robusto tanto en el frontend como en el backend.",
      describingMyself1:"Con una mentalidad orientada a la resolución de problemas, soy experta en transformar ideas en productos digitales, siempre buscando las mejores prácticas en desarrollo, accesibilidad y diseño. Mi pasión por el diseño gráfico me permite tener un enfoque especial en los detalles visuales para asegurar que cada producto no solo funcione bien, sino que también se vea increíble.",
      describingMyself2:"Estoy buscando nuevas oportunidades donde pueda colaborar en proyectos desafiantes y aportar mi experiencia en el desarrollo web. Si buscas a alguien comprometido, con una mentalidad creativa y técnica, estaré encantado de ayudarte a convertir tus ideas en realidad.",
      experience:"Experiencia",
      empathy:"Empatía",
      greeting:"Hola Soy Claudia.",
      hi:"Hola",
      honest:"Honestidad",
      introByMe:"Con mi experiencia como programador fullstack, puedo transformar tus ideas en realidad. Desde un diseño limpio y amigable para páginas estáticas hasta proyectos web ambiciosos y complejos.",
      methodologies:"Metodologías",
      myself:"Soy Desarrollador Full Stack ",
      ocupation:"Desarrollador Full Stack",
      OS:"SO",
      projects:"Proyectos",
      responsable:"Responsabilidad",
      seeMore:"Descubre más",
      selfTaught:"Autodidacta",
      skills:"Habilidades",
      softSkill:"Habilidades Blandas",
      teamWork:"Trabajo en equipo",
      welcome: "¡Bienvenido a mi pedazito de web!",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Idioma por defecto
    fallbackLng: "es", // Idioma si no se detecta
    interpolation: {
      escapeValue: false // React ya maneja la protección contra XSS
    }
  });

export default i18n;
