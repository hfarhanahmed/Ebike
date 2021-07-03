import { useContext, createContext } from 'react';
import { getTheme } from '../Theme';

const ThemeContext = createContext(getTheme('Default'));

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeContext as default, useTheme };
