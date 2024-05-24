import { useContext } from "react";
import ParagraphRecap from "./ParagraphRecap";
import { ThemeContext } from "./ThemeContext";

function ContentTestRecap() {
  const toggleThemeContext = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleThemeContext.toggleTheme}>Toggle theme</button>
      <ParagraphRecap />
    </div>
  );
}

export default ContentTestRecap;
