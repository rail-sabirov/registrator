import cn from 'classnames';
import styles from './MainLayout.module.scss';
import './MainLayout.parentStyles.scss';


import Logo from '../../components/Logo/Logo';
import { Navigate, Outlet,  useLocation } from 'react-router-dom';

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

                <div className={styles["menu"]}>
                    <ul>
                        <li><a href="/faxes">Faxes</a></li>
                        <li><a href="/agencies">Agenses</a></li>
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