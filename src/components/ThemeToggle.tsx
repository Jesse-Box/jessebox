/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

import Button from "./Button"

const ThemeToggle: React.FC = () => {
  const [mode, setMode] = useColorMode()
  const next = mode === "default" ? "light" : "default"

  const getModeName = (mode) => {
    switch (mode) {
      case "light":
        return "Light"
      case "default":
        return "Dark"
      default:
        return mode
    }
  }

  return (
    <Button
      aria-label="Toggle Theme"
      title="Toggle Theme"
      id="ToggleTheme"
      onClick={(e) => {
        setMode(next)
      }}
    >
      {getModeName(mode)}
    </Button>
  )
}

export default ThemeToggle
