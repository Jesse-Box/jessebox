import React from "react"
import Grid from "./Grid"
import LinkNav from "./LinkNav"
import ThemeToggle from "./ThemeToggle"

function Navigation() {
  return (
    <header>
      <Grid>
        <nav>
          <LinkNav title="Return Home" aria-label="Return Home" to="/">
            Home
          </LinkNav>
          <ul>
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
