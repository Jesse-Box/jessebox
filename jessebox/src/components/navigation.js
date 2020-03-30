/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Flex, Container } from "theme-ui"
import Icon from "./icon"
import NavLink from "./navlink"

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

function Navigation({ siteTitle }) {
  return (
    <nav
      sx={{
        borderBottomWidth: 0,
        borderBottomStyle: "primary",
        borderBottomColor: "muted",
      }}
    >
      <Container sx={{ maxWidth: 1, padding: 3 }}>
        <Flex
          sx={{
            justifyContent: "spaceBetween",
            alignItems: "center",
            paddingX: 1,
          }}
        >
          <Link
            to="/"
            activeClassName="active"
            sx={{
              variant: "navLink",
            }}
          >
            {siteTitle}
          </Link>
          <Flex sx={{ alignItems: "center" }}>
            <NavLink href="https://twitter.com/JesseThomasBox">
              <Icon name="twitter" />
            </NavLink>
            <NavLink href="https://www.linkedin.com/in/jesse-box-835346b7/">
              <Icon name="linkedIn" />
            </NavLink>
            <NavLink href="mailto:me@jessebox.net">
              <Icon name="mail" />
            </NavLink>
          </Flex>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navigation