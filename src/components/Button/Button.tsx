import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

// Ограничиваем прием типа кнопки
type ButtonProps = {
    type: 'button' | 'submit';
    color?: 'blue' | 'red';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className, type = 'button', ...props }) => {
    return (
        <button
            type={type}
            className={cn(styles['button'], className)}
            {...props}>
            {children}
        </button>
    );
}

export default Button;