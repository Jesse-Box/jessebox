import React from "react"
import LinkNav from "./LinkNav"

export default function Navigation() {
  return (
    <header className="d-flex">
      <LinkNav title="Return Home" aria-label="Return Home" to="/">
        Home
      </LinkNav>
      <nav>
        <ul className="d-flex ls-none p-0 m-0">
          <li className="d-flex p-0">
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
