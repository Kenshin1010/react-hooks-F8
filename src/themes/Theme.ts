import { ReactNode } from "react";

export interface ContentThemeProps {
  theme?: "dark" | "light" | string;
}

export interface ContentToggleThemeProps {
  theme?: "dark" | "light";
  toggleTheme?: () => void;
}

export interface ThemeProviderProps {
  children?: ReactNode;
}
