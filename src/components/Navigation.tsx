import React from "react"
import LinkNav from "./LinkNav"

export default function Navigation() {
  return (
    <header>
      <LinkNav title="Return Home" aria-label="Return Home" to="/">
        Home
      </LinkNav>
      <nav>
        <ul className="listStyle-none">
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
        </ul>
      </nav>
    </header>
  )
}
