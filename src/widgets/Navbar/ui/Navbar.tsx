import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
// interface для описания props, которые принимает компонент
interface NavbarProps {
className?: string
}

// не требует асинхронного chunk
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation(); // Use the t function for translations

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
                    {t('main')}
                    {' '}
                    {/* Use t('key') to get translations */}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t('about')}
                </AppLink>
            </div>
        </div>
    );
};
