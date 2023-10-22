import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Navbar />
			<AppRouter />
		</div>
	)
}

export default App
