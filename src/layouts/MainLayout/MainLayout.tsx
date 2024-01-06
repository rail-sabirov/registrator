import cn from 'classnames';
import styles from './MainLayout.module.scss';
import './MainLayout.parentStyles.scss';


import Logo from '../../components/Logo/Logo';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className={cn(styles['main-layout'])} >
            <header>
                <Logo type='logo-main-layout' />

                <div className={styles["menu"]}>
                    <ul>
                        <li><a href="/">Faxes</a></li>
                        <li><a href="/agences">Agenses</a></li>
                    </ul>
                </div>
                <div className={styles["user"]}>
                    <div className={styles["user-icon"]}>
                        <img src="/public/user-w-icon.svg" alt="User Icon" />
                    </div>
                    <div className={styles["user-name"]}>
                        User Name
                    </div>

                </div>

            </header>

            <main className={cn(styles['content'])}>
                <Outlet />
            </main>

            <footer>
                {(new Date()).getFullYear()} | Registrator
            </footer>

        </div>
    );
}

export default MainLayout;