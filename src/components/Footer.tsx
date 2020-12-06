/** @jsx jsx */
import { jsx, Container, Box, Styled } from "theme-ui"
import LinkNav from "./LinkNav"

type Data = {
  datoCmsSite: {
    globalSeo: {
      siteName: string
    }
  }
}

function Footer() {
  return (
    <footer
      aria-label="Footer"
      sx={{
        backgroundColor: "background",
        borderBottomColor: "muted",
        borderBottomStyle: "solid",
        borderBottomWidth: 0,
      }}
    >
      <Container px={[2]} py={2} sx={{ maxWidth: [0, 1, 2] }}>
        <Container
          px={[0, 3]}
          sx={{
            display: "flex",
            justifyContent: "spaceBetween",
            alignItems: "center",
          }}
        >
          <Styled.p>Find me on:</Styled.p>
          <ul
            sx={{
              display: "inline-grid",
              gridAutoFlow: "column",
              gridGap: [2, 3, 3],
              listStyle: "none",
            }}
          >
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
                to="https://www.linkedin.com/in/jesse-box-835346b7/"
                activeClassName="active"
              >
                LinkedIn
              </LinkNav>
            </li>
          </ul>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
