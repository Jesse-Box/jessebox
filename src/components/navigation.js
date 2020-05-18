/** @jsx jsx */
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { jsx, Flex } from "theme-ui";
import ButtonToggle from "./ButtonToggle2";

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

function Navigation({ siteTitle }) {
  return (
    <div
      sx={{
        backgroundColor: "primary.base",
        paddingY: [2, 3, 3],
        paddingX: [2, 3, 3],
      }}
    >
      <nav
        sx={{
          backgroundColor: "background",
          boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary.base}`,
          borderRadius: 3,
          maxWidth: "656px",
          marginX: [0, "auto", "auto"],
        }}
      >
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
              variant: "link.nav",
            }}
          >
            {siteTitle}
          </Link>
          <ButtonToggle />
        </Flex>
      </nav>
    </div>
  );
}

export default Navigation;
