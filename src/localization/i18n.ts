import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translations.json';
import ru from './ru/translations.json';

// Поддерживаемые языки
const resources = {
    en: {
        translation: en,
    },

    ru: {
        translation: ru,
    }
};

// Инициализация, английский по умолчанию
i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;