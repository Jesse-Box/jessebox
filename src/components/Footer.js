/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import LinkNav from "./link-nav"

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: "background",
        borderTopColor: "muted",
        borderTopStyle: "solid",
        borderTopWidth: 0,
      }}
    >
      <Container px={[2]} py={2} sx={{ maxWidth: [0, 1, 2] }}>
        <Container px={[0, 3]} sx={{ display: "flex", alignItems: "center" }}>
          <LinkNav title="Twitter" href="https://twitter.com/JesseThomasBox">
            Twitter
          </LinkNav>
          <LinkNav
            title="LinkedIn"
            href="https://www.linkedin.com/in/jesse-box-835346b7/"
          >
            LinkedIn
          </LinkNav>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
