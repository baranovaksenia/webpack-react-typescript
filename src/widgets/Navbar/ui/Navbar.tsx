import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
className?: string
}

// не требует асинхронного chunk
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation(); // Use the t function for translations

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links} />
        </div>
    );
};
