/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import Button from "./button";

function ButtonToggle(props) {
  const [mode, setMode] = useColorMode();
  const next = mode === "default" ? "light" : "default";

  const getModeName = (mode) => {
    switch (mode) {
      case "light":
        return "Light";
      case "default":
        return "Dark";
      default:
        return mode;
    }
  };

  return (
    <Button
      title="Toggle Theme"
      id="ToggleTheme"
      {...props}
      onClick={(e) => {
        setMode(next);
      }}
    >
      {getModeName(mode)}
    </Button>
  );
}

export default ButtonToggle;
