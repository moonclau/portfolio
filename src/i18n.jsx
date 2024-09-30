import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en inglés y español
const resources = {
  en: {
    translation: {
      aboutMe:"About me",
      welcome: "Welcome to our site!",
      description: "This is an example of multilingual support."
    }
  },
  es: {
    translation: {
      aboutMe:"Sobre mi",
      welcome: "¡Bienvenido a nuestro sitio!",
      description: "Este es un ejemplo de soporte multilingüe."
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
