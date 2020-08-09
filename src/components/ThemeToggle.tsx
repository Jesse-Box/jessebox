/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

import Button from "./Button"

function ThemeToggle() {
  const [mode, setMode] = useColorMode()
  const next = mode === "default" ? "light" : "default"

  const getModeName = (mode: string) => {
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
      onClick={() => {
        return setMode(next)
      }}
    >
      {getModeName(mode)}
    </Button>
  )
}

export default ThemeToggle
