import React from "react"
import LinkNav from "./LinkNav"

export default function Navigation() {
  return (
    <header className="container container_nav">
      <nav className="nav">
        <ul className="list list_nav">
          <li className="list__item">
            <LinkNav title="Return Home" aria-label="Return Home" to="/">
              Home
            </LinkNav>
          </li>
          <li className="list__item">
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
