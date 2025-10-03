'use client';
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light');

	const toggleTheme = () => {
		setTheme((prev) => {
			const newTheme: Theme = prev === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			document.documentElement.setAttribute('data-theme', newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		const hasTheme = localStorage.getItem('theme') as Theme;

		if (hasTheme) {
			setTheme(hasTheme);
			document.documentElement.setAttribute('data-theme', hasTheme);
			return;
		}

		localStorage.setItem('theme', theme);
	}, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme precisa do ThemeProvider');
	return ctx;
};
