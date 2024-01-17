import cn from 'classnames';
import { NavLink, useMatch } from 'react-router-dom';
import style from './MainMenuItem.module.scss';

export default function MainMenuItem({ name, link }) {
    const isActive = useMatch(link);
    return (
        <li className={style['main-menu-item']}>
            <NavLink className={cn(
                style['main-menu-item-link'], {
                [style['active']]: isActive
            })}
                to={link}>
                {name}
            </NavLink></li>
    )
}