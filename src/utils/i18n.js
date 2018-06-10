import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

import en from './locales/en.json';
import ru from './locales/ru.json';
import ua from './locales/ua.json';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  });

i18n.addResourceBundle('en', 'translations', en);
i18n.addResourceBundle('ru', 'translations', ru);
i18n.addResourceBundle('ua', 'translations', ua);

export default i18n;
