import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

// Retrieve the theme from localStorage and cast it to the Theme type.
// If no theme is found, the default is set to the light theme.
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

// Define a ThemeProvider functional component.
const ThemeProvider: FC = ({ children }) => {
    // Initialize the 'theme' state using useState and set it to the default theme.
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    // Memoize the 'defaultProps' object using useMemo.
    // This object contains the current theme and the function to set the theme.
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    // This provides child components access to the current theme and the ability to modify it.
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
