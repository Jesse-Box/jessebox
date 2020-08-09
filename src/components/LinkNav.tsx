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
  activeClassName: string
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
        py: 1,
        px: 3,
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
