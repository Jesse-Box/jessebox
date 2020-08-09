/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import ThemeToggle from "./ThemeToggle"
import { useStaticQuery, graphql } from "gatsby"
import LinkNav from "./LinkNav"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

function Navigation() {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const site = data.site.siteMetadata

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
            {site.title}
          </LinkNav>
          <ThemeToggle />
        </Container>
      </Container>
    </nav>
  )
}

export default Navigation
