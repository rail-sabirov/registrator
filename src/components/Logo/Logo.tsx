import styles from './Logo.module.scss';

type LogoType = 'only-logo' | 'logo-and-name';

interface LogoProps {
    type?: LogoType;
    className?: string;
    id?: string;

    // другие свойства для ссылки
    [key: string]: any;
}

const Logo: React.FC<LogoProps> = ({ type = 'logo-and-name', className, id, ...props }) => {
    return (
        <a href="/" className={styles['logo']} {...props}>
            <img src="/registrator_logo.jpg" alt="Registrator logo" />
            {type != 'only-logo' ? (<span>Registrator</span>) : null}
        </a>
    );
}

export default Logo;