import { useContext } from "react";
import { ThemeContextTag } from "./ThemeContextApp";

function Paragraph() {
  const theme = useContext(ThemeContextTag);
  console.log(theme.theme);

  return (
    <p
      className={theme.theme}
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

export default Paragraph;
