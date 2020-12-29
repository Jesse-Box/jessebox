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
        px: [3, 4, 4],
        py: 2,
        transition: "all 160ms ease-in",

        ":active": {
          transform: "scale(.92)",
        },

        ":focused": {
          transform: "scale(1.08)",
        },
      }}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: "primary",
}

export default Button
