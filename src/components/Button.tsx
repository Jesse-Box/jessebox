/** @jsx jsx */
import { jsx } from "theme-ui"

interface Props {
  variant: string
  id?: string
  title?: string
  children: Element
}

const Button: React.SFC<Props> = ({ variant, id, title, children }) => {
  return (
    <button
      variant={variant}
      id={id}
      title={title}
      sx={{
        fontFamily: "body",
        borderRadius: 1,
        border: "none",
        outline: "none",
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        fontWeight: "inherit",
        m: 0,
        px: 3,
        py: 1,
        transition: "all 80ms ease-in",

        // pass variant prop to sx
        variant: `buttons.${variant}`,

        ":active": {
          transform: "scale(.92)",
          boxShadow: (theme) => `0 0 0 2px ${theme.colors.accent}`,
        },

        ":focus": {
          boxShadow: (theme) => `0 0 0 2px ${theme.colors.accent}`,
        },
      }}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: "naked",
}

export default Button
