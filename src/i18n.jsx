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
      certificates:"Certificates",
      contactMe:"Contact me",
      //d
      description: "This is an example of multilingual support.",
      //e
      experience:"Experience",
      //f
      //g
      //h
      //i
      introByMe:"With my experience as a fullstack programmer, I can transform your ideas into reality. From a clean and friendly design for static pages to ambitious and complex web projects.",
      //j
      //k
      //l
      //m
      //n
      //o
      ocupation:"Web developer",
      //p
      projects:"Projects",
      //q
      //r
      //s
      skills:"Skills",
      //t
      //w
      welcome: "Welcome to our site!",
      //x
      //y
      //z
      
    }
  },
  es: {
    translation: {
      
      aboutMe:"Sobre mi",
      description: "Este es un ejemplo de soporte multilingüe.",
      certificates:"Certificados",
      contactMe:"Contáctame",
      experience:"Experiencia",
      introByMe:"Con mi experiencia como programador fullstack, puedo transformar tus ideas en realidad. Desde un diseño limpio y amigable para páginas estáticas hasta proyectos web ambiciosos y complejos.",
      ocupation:"Desarrollador Web",
      projects:"Proyectos",
      skills:"Habilidades",
      welcome: "¡Bienvenido a nuestro sitio!",
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
