import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

// interface - те данные, которые хук будет возвращать
interface useThemeResult {
toggleTheme: () => void
theme: Theme
}

export function useTheme(): useThemeResult {
    // логика по получению данных из контекста и по переключению темы
    const { theme, setTheme } = useContext(ThemeContext);

    // функция для смены темы
    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        // save theme to localStorage
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
}
