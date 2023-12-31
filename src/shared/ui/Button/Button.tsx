import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
CLEAR = 'clear',
OUTLINE = 'outline',
BACKGROUND = 'background',
BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
className?: string
theme?: ButtonTheme
square?: boolean
size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, theme, square, size = ButtonSize.M, children, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
