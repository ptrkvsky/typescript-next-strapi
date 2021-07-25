import { themeLight, themeDark } from '@/styles/theme';
import { Theme, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

type themeContextType = {
  theme: Theme;
  setLight: () => void;
  setDark: () => void;
};

const themeContextDefaultValues: themeContextType = {
  theme: themeLight,
  setLight: () => {
    // do nothing.
  },
  setDark: () => {
    // do nothing.
  },
};

const ThemeContext = createContext<themeContextType>(themeContextDefaultValues);

export function useThemeContext() {
  return useContext(ThemeContext);
}

type Props = {
  children: ReactNode;
};

export function ContextThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(themeLight);

  const setLight = () => {
    setTheme(themeLight);
  };

  const setDark = () => {
    setTheme(themeDark);
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia(`(prefers-color-scheme: dark)`).matches
    ) {
      console.log(`dark`);
      setDark();
    }
  }, []);

  const value = {
    theme,
    setLight,
    setDark,
  };

  return (
    <>
      <ThemeContext.Provider value={value}>
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
