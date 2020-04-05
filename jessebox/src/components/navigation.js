/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Flex, Container } from "theme-ui"
import Icon from "./icon"
import NavLink from "./navLink"

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
        borderWidth: 0,
        borderStyle: "primary",
        borderColor: "muted",
        margin: [2, 4, 4],
        borderRadius: 2,
      }}
    >
      <Container sx={{ maxWidth: 1 }}>
        <Flex
          sx={{
            justifyContent: "spaceBetween",
            alignItems: "center",
            padding: 1,
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
            <NavLink
              title="Twitter Profile"
              href="https://twitter.com/JesseThomasBox"
            >
              <Icon name="twitter" />
            </NavLink>
            <NavLink
              title="LinkedIn Profile"
              href="https://www.linkedin.com/in/jesse-box-835346b7/"
            >
              <Icon name="linkedIn" />
            </NavLink>
          </Flex>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navigation
