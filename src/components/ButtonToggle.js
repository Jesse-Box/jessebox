/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import Button from "./Button";

function ButtonToggle(props) {
  const [mode, setMode] = useColorMode();
  return (
    <Button
      title="Toggle Theme"
      id="ToggleTheme"
      {...props}
      onClick={(e) => {
        const next = mode === "default" ? "light" : "default";
        setMode(next);
      }}
    >
      Theme
    </Button>
  );
}

export default ButtonToggle;
