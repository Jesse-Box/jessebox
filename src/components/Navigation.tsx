import React from "react"
import Grid from "./Grid"
import LinkNav from "./LinkNav"
import ThemeToggle from "./ThemeToggle"

export default function Navigation() {
  return (
    <header>
      <LinkNav title="Return Home" aria-label="Return Home" to="/">
        Home
      </LinkNav>
      <nav>
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
    </header>
  )
}
