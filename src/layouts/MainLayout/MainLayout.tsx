import cn from 'classnames';
import styles from './MainLayout.module.scss';
import './MainLayout.parentStyles.scss';


import Logo from '../../components/Logo/Logo';
import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom';
import MainMenu from '../../components/MainMenu/MainMenu';

const MainLayout = () => {
    // Если перешли в корень, тогда редиректим на страницу с факсами
    const location = useLocation();


    if (location.pathname == '/') {
        return <Navigate to="/faxes" replace />
    }

    // Выводим Layout
    return (
        <div className={cn(styles['main-layout'])} >
            <header>
                <Logo type='logo-main-layout' />

                <MainMenu />
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