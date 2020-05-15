/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";

NavLink.propTypes = {
  id: PropTypes.string,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

NavLink.defaultProps = {
  href: "#",
  title: "title",
};

function NavLink(props) {
  const { id, href, title, children } = props;

  return (
    <Styled.a
      id={id}
      href={href}
      title={title}
      sx={{
        variant: "link.nav",
      }}
    >
      {children}
    </Styled.a>
  );
}

export default NavLink;
