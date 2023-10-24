/* eslint-disable no-unused-vars */
import { createContext } from 'react';

// Theme enumeration (additional themes can be added)
export enum Theme {
DARK = 'dark',
LIGHT = 'light',
}

// Interface for the theme context
export interface ThemeContextProps {
theme?: Theme
// Function to switch the theme (accepts a theme)
setTheme?: (theme: Theme) => void
}

// Interface for the theme context (as a generic)
export const ThemeContext = createContext<ThemeContextProps>({});

// Save the theme in localStorage to preserve it across page reloads
// Key for localStorage
export const LOCAL_STORAGE_THEME_KEY = 'theme';
