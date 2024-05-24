import { createContext, useState } from "react";
import ContentTestTheme from "./ContentTestTheme";
import { ContentThemeProps } from "../../../themes/Theme";

// Context
// CompA => CompB => CompC

// Theme: Dark / Light
// 1. Create context
// 2. Provider
// 3. Consumer

export const ThemeContextTag = createContext<ContentThemeProps>({
  theme: "dark",
});
console.log(ThemeContextTag);

function ThemeContextApp() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleThemeTag = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  return (
    <ThemeContextTag.Provider value={{ theme }}>
      <button onClick={toggleThemeTag}>Toggle theme</button>
      <ContentTestTheme />
    </ThemeContextTag.Provider>
  );
}

export default ThemeContextApp;
