/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Container, Box } from "theme-ui";

Horizon.propTypes = {
  children: PropTypes.node.isRequired,
};

function Horizon(props) {
  const { children, title } = props;
  return (
    <Container
      title={title}
      sx={{
        backgroundColor: "primary.base",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: [3, 4, 5],
        minHeight: "48vh",
      }}
    >
      <Box px={[3, 2, 2]} py={[3, 2, 2]} sx={{ maxWidth: 0, marginX: "auto" }}>
        {children}
      </Box>
    </Container>
  );
}

export default Horizon;
