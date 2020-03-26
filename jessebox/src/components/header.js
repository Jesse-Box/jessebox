/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { jsx, Flex, Container } from "theme-ui"

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function Header({ siteTitle }) {
  return (
    <header
      sx={{
        borderBottomWidth: 0,
        borderBottomStyle: "primary",
        borderBottomColor: "muted",
      }}
    >
      <Container sx={{ maxWidth: 1, padding: 2 }}>
        <Flex sx={{ justifyContent: "start" }}>
          <Link
            to="/"
            activeClassName="active"
            sx={{
              paddingY: 2,
              paddingX: 3,
              color: "inherit",
              fontSize: 0,
              fontWeight: "bold",
              textDecoration: "none",
              "&.active": {
                color: "primary",
              },
            }}
          >
            {siteTitle}
          </Link>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
