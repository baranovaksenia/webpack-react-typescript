import { Link } from 'react-router-dom'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import './styles/index.scss'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<AppRouter />
		</div>
	)
}

export default App
