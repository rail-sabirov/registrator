import styles from './MainMenu.module.scss';
import MainMenuItem from '../MainMenuItem/MainMenuItem';

export default function MainMenu() {
    return (
        <div className={styles["main-menu"]}>
            <ul>
                <MainMenuItem name='Faxes' link='/faxes' />
                <MainMenuItem name='Agencies' link='/agencies' />
            </ul>
        </div>
    )
}