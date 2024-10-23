import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en inglés y español
const resources = {
  en: {
    translation: {
      //a
      aboutMe:"About me",
      AwsPAccreditation:"This certificate validates my fundamental technical knowledge of AWS cloud computing, global infrastructure, services, solutions, migration and security.",
      //b
      briefIntroduction:"With more than 4 years of experience building efficient applications and websites.",
      //c
      carrer:"My professional career",
      certificates:"Certificates",
      cloud:"Cloud",
      close:"Close",
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
      jobAerobit:"Customer support, managing and resolving tickets to solve problems and collect requirements for implementation in upgrades. Active collaboration in the maintenance and upgrade of various web platforms, ensuring optimal performance and improved user experience.",
      jobAmats:"Creation and publication of relevant content to attract leads in different social networks. In addition to the collaboration in maintenance and updating of the website",
      //k
      //l
      //m
      methodologies:"Methodologies",
      myself:"I´m Full Stack Developer",
      //n
      NISTDescription:"This certificate is about the NIST Cybersecurity Framework, a set of voluntary guidelines designed to help organizations assess and improve their ability to prevent, detect and respond to cybersecurity risks.",
      //o
      ocupation:"Full Stack developer",
      ocupationAerobit:"Full Stack developer",
      ocupationAmats:"Digital Marketing Assistant",
      OS:"OS",
      //p
      projects:"Projects",
      //q
      //r
      responsable:"Responsability",
      //s
      SDLCDescription:"This certificate is about Systems Development Life Cycle or Software Development Life Cycle which is the structured process that guides the creation of software from its conception to its implementation and maintenance.",
      seeCertificate:"See certificate",
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
      AwsPAccreditation:"Este certificado valida mis conocimientos técnicos fundamentales sobre computación en la nube, infraestructura global, servicios, soluciones, migración y seguridad de AWS.",
      briefIntroduction:"Con más de 4 años de experiencia construyendo aplicaciones y sitios web eficientes.",
      carrer:"Mi trayectoria profesional",
      certificates:"Certificados",
      cloud:"Nube",
      close:"Cerrar",
      contactMe:"Contáctame",
      describingMyself: "Mis proyectos se centran en la creación de interfaces de usuario intuitivas y funcionales, optimizando la experiencia del usuario y asegurando un rendimiento robusto tanto en el frontend como en el backend.",
      describingMyself1:"Con una mentalidad orientada a la resolución de problemas, soy experta en transformar ideas en productos digitales, siempre buscando las mejores prácticas en desarrollo, accesibilidad y diseño. Mi pasión por el diseño gráfico me permite tener un enfoque especial en los detalles visuales para asegurar que cada producto no solo funcione bien, sino que también se vea increíble.",
      describingMyself2:"Estoy buscando nuevas oportunidades donde pueda colaborar en proyectos desafiantes y aportar mi experiencia en el desarrollo web. Si buscas a alguien comprometido, con una mentalidad creativa y técnica, estaré encantado de ayudarte a convertir tus ideas en realidad.",
      experience:"Experiencia",
      empathy:"Empatía",
      greeting:"Hola soy Claudia.",
      hi:"Hola",
      honest:"Honestidad",
      introByMe:"Con mi experiencia como programador fullstack, puedo transformar tus ideas en realidad. Desde un diseño limpio y amigable para páginas estáticas hasta proyectos web ambiciosos y complejos.",
      jobAerobit:"Atención al cliente, gestionando y resolviendo tickets para solucionar problemas y recolectar requerimientos para su implementación en actualizaciones. Colaboración activa en el mantenimiento y actualización de diversas plataformas web, asegurando un rendimiento óptimo y una experiencia de usuario mejorada.",
      jobAmats:"Creación y publicación de contenido relevante para atraer leads en diferentes redes sociales. Además de la colaboración en Mantenimiento y actualización de la página web",
      NISTDescription:"Este certificado es acerca del Marco de Ciberseguridad NIST, Un conjunto de pautas voluntarias diseñadas para ayudar a las organizaciones a evaluar y mejorar su capacidad para prevenir, detectar y responder a los riesgos de ciberseguridad.",
      methodologies:"Metodologías",
      myself:"Soy Desarrollador Full Stack ",
      ocupation:"Desarrollador Full Stack",
      ocupationAerobit:"Desarrollador Full Stack",
      ocupationAmats:"Auxiliar de Marketing Digital",
      OS:"SO",
      projects:"Proyectos",
      responsable:"Responsabilidad",
      SDLCDescription:"Este certificado es acerca de Systems Development Life Cycle o Software Development Life Cycle que es el proceso estructurado que guía la creación de software desde su concepción hasta su implementación y mantenimiento.",
      seeCertificate:"Ver certificado",
      seeMore:"Descubre más",
      selfTaught:"Autodidacta",
      skills:"Habilidades",
      softSkill:"Habilidades Blandas",
      teamWork:"Trabajo en equipo",
      welcome: "¡Bienvenido a mi pedacito de web!",
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