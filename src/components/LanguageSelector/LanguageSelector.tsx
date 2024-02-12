import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import styles from './LanguageSelector.module.scss';
import { useEffect, useState } from 'react';

const LanguageSelector = () => {
    const key = 'language';
    const { i18n, t } = useTranslation();
    const [lang, setLang] = useState('en');

    type Languages = 'en' | 'ru';


    const changeLang = (lang: Languages) => {
        i18n.changeLanguage(lang);
        localStorage.setItem(key, lang);
        setLang(lang);
    };

    useEffect(() => {
        const lng = localStorage.getItem("language");

        if (lng) {
            setLang(lng.toString());
        }
    }, []);

    return (
        <div className={styles['language-selector']}>
            <img src="/public/language_icon.svg" alt="language switcher" title={t('Language switcher')}/>
            <ul className={styles['lang-menu']}>
                <li onClick={() => changeLang('en')} className={cn(styles['lang-item'], { [styles['checked']]: lang === 'en' })}>English</li>
                <li onClick={() => changeLang('ru')} className={cn(styles['lang-item'], { [styles['checked']]: lang === 'ru' })}>Русский</li>
            </ul>
        </div>
    );
}

export default LanguageSelector;