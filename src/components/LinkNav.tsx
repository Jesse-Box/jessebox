/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

interface Props {
  id?: string
  href?: string
  title: string
  ariaLabel?: string
  children: React.ReactNode
  to: string
  activeClassName?: string
}

function LinkNav(props: Props) {
  const { id, href, title, ariaLabel, children, to, activeClassName } = props
  return (
    <Styled.a
      as={Link}
      id={id}
      href={href}
      title={title}
      aria-label={ariaLabel}
      to={to}
      activeClassName={activeClassName}
      sx={{
        variant: "link.nav",
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
        transition: "all 80ms ease-in",

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
    </Styled.a>
  )
}

LinkNav.defaultProps = {
  ariaLabel: "Need Label",
}

export default LinkNav
