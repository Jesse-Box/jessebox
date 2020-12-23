/** @jsx jsx */
import { jsx } from "theme-ui"

import Grid from "./Grid"
import LinkNav from "./LinkNav"
import ThemeToggle from "./ThemeToggle"

function Navigation() {
  return (
    <header sx={{ py: [2, 3, 4] }}>
      <Grid>
        <nav
          sx={{
            gridColumn: "1/4",
            py: [3, 4, 5],
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LinkNav
            title="Return Home"
            aria-label="Return Home"
            to="/"
            sx={{ mb: [3, 3, 4] }}
          >
            Home
          </LinkNav>
          <ul
            sx={{
              display: "inline-grid",
              gridAutoFlow: "column",
              gridGap: [2, 3, 3],
              listStyle: "none",
              my: 0,
              py: 0,
              px: [2, 3, 4],
            }}
          >
            <li>
              <LinkNav
                title="About me"
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
        </nav>
      </Grid>
    </header>
  )
}

export default Navigation
