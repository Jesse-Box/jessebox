/** @jsx jsx */
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { jsx, Flex, Container } from "theme-ui";
import ButtonToggle from "./ButtonToggle";

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

function Navigation({ siteTitle }) {
  return (
    <nav
      sx={{
        backgroundColor: "background",
        boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary.base}`,
        marginY: [2, 3, 4],
        marginX: [2, "auto", "auto"],
        borderRadius: 3,
        maxWidth: "656px",
      }}
    >
      <Container sx={{ maxWidth: 0 }}>
        <Flex
          sx={{
            justifyContent: "spaceBetween",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Link
            title="Home"
            to="/"
            activeClassName="active"
            sx={{
              variant: "navLink",
            }}
          >
            {siteTitle}
          </Link>
          <ButtonToggle />
        </Flex>
      </Container>
    </nav>
  );
}

export default Navigation;
