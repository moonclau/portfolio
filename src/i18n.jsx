import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en inglés y español
const resources = {
  en: {
    translation: {
      //a
      aboutMe:"About me",
      //b
      //c
      carrer:"My professional career",
      certificates:"Certificates",
      contactMe:"Contact me",
      //d
      describingMyself: "I have 4 years working as a fullstack developer in the creation and maintenance of web applications. In my spare time, I enjoy designing landing pages, which allows me to explore my creativity and improve my design skills.my creativity and improve my design skills. I am passionate about continuous learning and improving my skills to contribute meaningfully to digital projects. To contribute in a meaningful way to digital projects.",
      //e
      experience:"Experience",
      //f
      //g
      greeting:"Hi I'm Claudia,",
      //h
      //i
      introByMe:"With my experience as a fullstack programmer, I can transform your ideas into reality. From a clean and friendly design for static pages to ambitious and complex web projects.",
      //j
      //k
      //l
      //m
      //n
      //o
      ocupation:"Full Stack developer",
      //p
      projects:"Projects",
      //q
      //r
      //s
      skills:"Skills",
      //t
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
      describingMyself: "Tengo 4 años trabajando como desarrollador fullstack en la creación y mantenimiento de aplicaciones web.En mis tiempos libres, disfruto diseñando landing pages, lo que me permite explorar mi creatividad y mejorar mis habilidades de diseño. Me apasionaona el aprendizaje continuo y la mejora de mis habilidades para contribuir de manera significativa a proyectos digitales.",
      carrer:"Mi trayectoria profesional",
      certificates:"Certificados",
      contactMe:"Contáctame",
      experience:"Experiencia",
      greeting:"Hola Soy Claudia.",
      introByMe:"Con mi experiencia como programador fullstack, puedo transformar tus ideas en realidad. Desde un diseño limpio y amigable para páginas estáticas hasta proyectos web ambiciosos y complejos.",
      ocupation:"Desarrollador Full Stack",
      projects:"Proyectos",
      skills:"Habilidades",
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
