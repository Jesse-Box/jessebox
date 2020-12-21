/** @jsx jsx */
import { jsx } from "theme-ui"

interface Props {
  variant?: string
  ariaLabel: string
  id?: string
  title?: string
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: Props) => {
  const { variant, ariaLabel, id, title, children, onClick } = props
  return (
    <button
      variant={variant}
      id={id}
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
      sx={{
        variant: `buttons.${variant}`,
        fontFamily: "body",
        borderRadius: 4,
        border: "none",
        outline: "none",
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        m: 0,
        px: 3,
        py: 1,
        transition: "all 160ms ease-in",

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
  variant: "primary",
  ariaLabel: "Need Label",
}

export default Button
