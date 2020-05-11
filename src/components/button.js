/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

Button.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  title: "title",
};

function Button(props) {
  const { variant = "primary", id, title, children, ...rest } = props;

  return (
    <button
      variant={variant}
      {...rest}
      sx={{
        fontFamily: "body",
        borderRadius: 3,
        border: "none",
        outline: "none",
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        fontWeight: "inherit",
        m: 0,
        px: 3,
        py: 1,
        transition: "all 80ms ease-in",

        // pass variant prop to sx
        variant: `buttons.${variant}`,

        ":active": {
          transform: "scale(.92)",
          boxShadow: (theme) => `0 0 0 2px ${theme.colors.accent}`,
        },

        ":focus": {
          boxShadow: (theme) => `0 0 0 2px ${theme.colors.accent}`,
        },
      }}
    >
      {children}
    </button>
  );
}
export default Button;
