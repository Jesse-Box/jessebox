/** @jsx jsx */
import { jsx, Container, Styled } from "theme-ui"
import LinkNav from "./LinkNav"

function Footer() {
  return (
    <footer aria-label="Footer">
      <Container px={2} py={3} mb={[3, 4, 4]} sx={{ maxWidth: [0, 1, 2] }}>
        <Container
          px={[0, 3]}
          sx={{
            display: "flex",
            flexFlow: ["column wrap", "row wrap"],
            justifyContent: "spaceBetween",
            alignItems: "center",
          }}
        >
          <LinkNav title="Home" to="/" ariaLabel="Home" activeClassName="true">
            Jesse Box
          </LinkNav>
          <Styled.ul
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              listStyle: "none",
            }}
          >
            <li>
              <LinkNav
                title="me@jessebox.net"
                aria-label="Email Address"
                href="mailto: me@jessebox.net"
                activeClassName="active"
              >
                Email
              </LinkNav>
            </li>
            <li>
              <LinkNav
                title="Twitter"
                aria-label="Twitter Profile"
                href="https://twitter.com/JesseThomasBox"
                activeClassName="active"
              >
                Twitter
              </LinkNav>
            </li>
            <li>
              <LinkNav
                title="Github"
                aria-label="Github Profile"
                href="https://github.com/Jesse-Box"
                activeClassName="active"
              >
                Github
              </LinkNav>
            </li>
            <li>
              <LinkNav
                title="LinkedIn"
                aria-label="LinkedIn Profile"
                href="https://www.linkedin.com/in/jesse-box-835346b7/"
                activeClassName="active"
              >
                LinkedIn
              </LinkNav>
            </li>
          </Styled.ul>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
