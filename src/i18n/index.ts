import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import I18NextVue from 'i18next-vue';
import { App } from 'vue';

import { en, es } from './locale';

i18next.use(LanguageDetector).init({
  debug: true,
  fallbackLng: 'en',
  lng: 'es',
  resources: {
    en: { translation: en },
    es: { translation: es }
  }
});

function initI18n (app: App) {
  app.use(
    I18NextVue,
    { i18next }
  );
  return app;
}

export default initI18n;

export { i18next };
