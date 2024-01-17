import styles from './MainMenu.module.scss';
import MainMenuItem from '../MainMenuItem/MainMenuItem';
import { useTranslation } from 'react-i18next';

export default function MainMenu() {
    const { t } = useTranslation();

    return (
        <div className={styles["main-menu"]}>
            <ul>
                <MainMenuItem name={t('Faxes')} link='/faxes' />
                <MainMenuItem name={t('Agencies')} link='/agencies' />
            </ul>
        </div>
    )
}