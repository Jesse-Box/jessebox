/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

interface Props {
  id?: string
  href?: string
  title: string
  ariaLabel: string
  children: Element
  to: string
  activeClassName: string
}

const LinkNav: React.SFC<Props> = ({
  id,
  href,
  title,
  ariaLabel,
  children,
  to,
  activeClassName,
}) => {
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
