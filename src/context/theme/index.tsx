import { useColorMode } from "@/components/ui/color-mode";
import {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  useContext,
  useCallback,
} from "react";

interface IThemeContext {
  mode: "light" | "dark";
  toggleMode: (mode: "light" | "dark") => void
}
const defTheme: IThemeContext = {
  mode: "light",
  toggleMode: () => {}
};

const ThemeContext = createContext<IThemeContext>(defTheme);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const toggleMode = useCallback((mode: "dark" | "light") => {
    setTheme(() => ({...theme, mode}))
    chakraMode.setColorMode(mode)
  }, [])

  const chakraMode = useColorMode()

  const [theme, setTheme] = useState(() => {
    let mode = defTheme.mode

    // if the user already chose a theme for the page
    // this will make the selected theme remain, even after reloading the page
    var savedTheme = localStorage.getItem("theme-mode");
    console.log(savedTheme);
    if (savedTheme == 'light' || savedTheme == 'dark') {
      mode = savedTheme;
    } else {
      // if the user has a default theme
      if (window.matchMedia) {
        var match = window.matchMedia("(prefers-color-scheme: dark)");
        mode = match.matches ? "dark" : "light"
      }
    }
    // document.documentElement.dataset.theme = mode;

    return {
      mode,
      toggleMode,
    }
  });

  useEffect(() => {
    localStorage.setItem("theme-mode", theme.mode)
    document.documentElement.dataset.theme = theme.mode
  }, [theme.mode])
  return <ThemeContext.Provider value={{...theme, toggleMode}}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;

export const useTheme = () => {
  return useContext(ThemeContext);
};
