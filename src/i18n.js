import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; 

i18n
  .use(Backend) 
  .use(initReactI18next)
  .init({
    // Configuración de i18next
    fallbackLng: 'en', // Idioma por defecto si no se encuentra la traducción
    debug: true, // Para ver mensajes de depuración en la consola

    interpolation: {
      escapeValue: false, // React ya hace el escape de valores
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta a los archivos de traducción
    },
  });

export default i18n;
