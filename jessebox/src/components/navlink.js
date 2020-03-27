/** @jsx jsx */
import { jsx, Box } from "theme-ui"

function NavLink(props) {
  const { href, children } = props

  return (
    <Box px={1}>
      <a href={href} sx={{ variant: "navLink" }}>
        {children}
      </a>
    </Box>
  )
}

export default NavLink
