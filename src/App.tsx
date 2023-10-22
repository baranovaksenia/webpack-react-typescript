import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'

import { Suspense } from 'react'
import { classNames } from './helpers/classNames/classNames'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Toggle theme</button>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<MainPageLazy />} />
					<Route path='/about' element={<AboutPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
