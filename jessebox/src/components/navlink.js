/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

function NavLink(props) {
  const { id, href, title, children } = props

  return (
    <Styled.a
      id={id}
      href={href}
      title={title}
      sx={{
        variant: "navLink",
      }}
    >
      {children}
    </Styled.a>
  )
}

export default NavLink
