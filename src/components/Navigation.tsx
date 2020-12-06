/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import ThemeToggle from "./ThemeToggle"
import { useStaticQuery, graphql } from "gatsby"
import LinkNav from "./LinkNav"

type Data = {
  datoCmsSite: {
    globalSeo: {
      siteName: string
    }
  }
}

function Navigation() {
  const data: Data = useStaticQuery(graphql`
    query SiteTitleQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
      }
    }
  `)

  return (
    <nav
      aria-label="Navigation Bar"
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
          <LinkNav
            title="Home"
            aria-label="Home"
            to="/"
            activeClassName="active"
          >
            {data.datoCmsSite.globalSeo.siteName}
          </LinkNav>
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
                title="About"
                aria-label="About me"
                to="/about"
                activeClassName="active"
              >
                About
              </LinkNav>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </Container>
      </Container>
    </nav>
  )
}

export default Navigation
