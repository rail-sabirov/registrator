import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import styles from './LanguageSelector.module.scss';
import { useState } from 'react';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [checkbox, setCheckbox] = useState(false);
    const langs = {
        'true': 'en',
        'false': 'ru'
    };

    const changeLang = () => {
        setCheckbox(!checkbox);
        i18n.changeLanguage(langs[checkbox.toString()]);
    };

    return (
        <div className={styles['language-selector']}>
            <span className={styles['language-label']}>English</span>
            <label className={styles['switch']}>
                <input type="checkbox" 
                    onChange={ changeLang }
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