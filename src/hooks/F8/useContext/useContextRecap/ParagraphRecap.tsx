import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ParagraphRecap() {
  const themeContext = useContext(ThemeContext);
  return (
    <p
      className={themeContext.theme}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 3fr)",
        gap: "10px",
        textAlign: "justify",
      }}
    >
      Context provides a way to pass data through the component tree without
      having to pass props down manually at every level.
    </p>
  );
}

export default ParagraphRecap;
