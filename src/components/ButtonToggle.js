/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import Button from "./Button";

function ButtonToggle(props) {
  const [mode, setMode] = useColorMode();
  return (
    <Button
      {...props}
      onClick={(e) => {
        const next = mode === "default" ? "light" : "default";
        setMode(next);
      }}
    >
      Click me
    </Button>
  );
}

export default ButtonToggle;
