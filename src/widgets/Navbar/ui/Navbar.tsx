import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
// interface для описания props, которые принимает компонент
interface NavbarProps {
	className?: string
}

// не требует асинхронного chunk
export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to='/'>
					Main
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
					About
				</AppLink>
			</div>
		</div>
	)
}
