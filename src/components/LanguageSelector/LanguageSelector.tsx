import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import styles from './LanguageSelector.module.scss';
import { useEffect, useState } from 'react';

const LanguageSelector = () => {
    const key = 'language';
    const langs = {
        'true': 'en',
        'false': 'ru'
    };

    const { i18n } = useTranslation();
    const [checkbox, setCheckbox] = useState(false);

    const changeLang = () => {
        setCheckbox(!checkbox);
        i18n.changeLanguage(langs[checkbox.toString()]);
        localStorage.setItem(key, langs[checkbox.toString()]);
    };

    useEffect(() => {
        const lang = localStorage.getItem("language");
        if (lang && lang.toString() == "ru") {
          setCheckbox(true);
        }
    }, []);

    return (
        <div className={styles['language-selector']}>
            <span className={styles['language-label']}>English</span>
            <label className={styles['switch']}>
                <input type="checkbox"
                    onChange={changeLang}
                    checked={checkbox}
                />
                <span
                    className={cn(styles['slider'], styles['round'])}
                ></span>
            </label>
            <span className={styles['language-label']}>Русский</span>
        </div>
    );
}

export default LanguageSelector;