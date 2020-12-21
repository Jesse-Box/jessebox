/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import LinkNav from "./LinkNav"
import ThemeToggle from "./ThemeToggle"

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
    <header>
      <nav
        sx={{
          mx: "auto",
          maxWidth: [0, 1, 2],
          display: "flex",
          justifyContent: "spaceBetween",
          alignItems: "center",
        }}
      >
        <LinkNav title="Home" aria-label="Home" to="/">
          {data.datoCmsSite.globalSeo.siteName}
        </LinkNav>
        <Styled.ul
          sx={{
            display: "flex",
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
        </Styled.ul>
      </nav>
    </header>
  )
}

export default Navigation
