/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Container } from "theme-ui";
import SEO from "./seo";

Main.propTypes = {
  mainContent: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
};

function Main(props) {
  const { mainContent, pageTitle } = props;
  return (
    <main>
      <SEO title={pageTitle} />
      <Container px={[3, 2, 2]} py={4} sx={{ maxWidth: 0 }}>
        {mainContent}
      </Container>
    </main>
  );
}

export default Main;
