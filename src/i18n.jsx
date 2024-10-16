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
      describingMyself1:"Con una mentalidad orientada a la resolución de problemas, soy experto en transformar ideas en productos digitales, siempre buscando las mejores prácticas en desarrollo, accesibilidad y diseño. Mi pasión por el diseño gráfico me permite tener un enfoque especial en los detalles visuales, usando herramientas como Photoshop e Illustrator para asegurar que cada producto no solo funcione bien, sino que también se vea increíble.",
      describingMyself2:"Estoy buscando nuevas oportunidades donde pueda colaborar en proyectos desafiantes y aportar mi experiencia en el desarrollo web. Si buscas a alguien comprometido, con una mentalidad creativa y técnica, estaré encantado de ayudarte a convertir tus ideas en realidad.",
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
      describingMyself: "A lo largo de mi carrera, he desarrollado una sólida base en PHP, JavaScript y Ruby, manejando frameworks como Laravel, Ruby on Rails, Vue, React JS y Bootstrap. Mis proyectos se centran en la creación de interfaces de usuario intuitivas y funcionales, optimizando la experiencia del usuario y asegurando un rendimiento robusto tanto en el frontend como en el backend.",
      describingMyself1:"Con una mentalidad orientada a la resolución de problemas, soy experto en transformar ideas en productos digitales, siempre buscando las mejores prácticas en desarrollo, accesibilidad y diseño. Mi pasión por el diseño gráfico me permite tener un enfoque especial en los detalles visuales, usando herramientas como Photoshop e Illustrator para asegurar que cada producto no solo funcione bien, sino que también se vea increíble.",
      describingMyself2:"Estoy buscando nuevas oportunidades donde pueda colaborar en proyectos desafiantes y aportar mi experiencia en el desarrollo web. Si buscas a alguien comprometido, con una mentalidad creativa y técnica, estaré encantado de ayudarte a convertir tus ideas en realidad.",
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
