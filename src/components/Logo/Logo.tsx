import cn from 'classnames';
import { LogoProps } from './LogoProps';
import styles from './Logo.module.scss';

const Logo = ({ type = 'logo-and-name', className, id, ...props }: LogoProps) => {
    return (
        <a href="/" className={cn(styles['logo'], className, {
            [styles['logo-main-layout']]: type == 'logo-main-layout'
        })} {...props}>
            <img src="/registrator_logo.jpg" alt="Registrator logo" />
            {type != 'only-logo' ? (<span>Registrator</span>) : null}
        </a>
    );
}

export default Logo;