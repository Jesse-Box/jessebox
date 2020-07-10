/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const LinkNav = props => {
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
        py: 1,
        px: 3,
      }}
    >
      {children}
    </Styled.a>
  )
}

export default LinkNav
