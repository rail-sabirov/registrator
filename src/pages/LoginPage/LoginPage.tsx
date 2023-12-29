import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import Logo from '../../components/Logo/Logo';
import styles from './LoginPage.module.scss'
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

export const LoginPage = () => {
    const { t } = useTranslation();
    const [errorFromServer, setErrorFromServer] = useState(null);

    return (
        <div className={styles['login-page']}>
            <div className={styles['logo-block']}>
                <Logo />
            </div>

            <div className={styles['header']}>
                <span>{t('Please sign-in to your account and start the adventure')}</span>
            </div>

            {errorFromServer ? <div className={cn(styles['error-block'])}>{errorFromServer}</div> : null}

            <LoginForm onServerError={setErrorFromServer} />
        </div>
    )
}