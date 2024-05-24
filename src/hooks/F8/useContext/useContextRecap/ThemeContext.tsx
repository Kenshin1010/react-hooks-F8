import { createContext, useState } from "react";
import {
  ContentToggleThemeProps,
  ThemeProviderProps,
} from "../../../../themes/Theme";

const ThemeContext = createContext<ContentToggleThemeProps>({
  theme: "dark",
  toggleTheme: () => {},
});

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
