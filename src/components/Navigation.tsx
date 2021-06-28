import React from "react"
import LinkNav from "./LinkNav"

export default function Navigation() {
  return (
    <header className="py-4">
      <nav className="navigation">
        <ul className="menu">
          <li className="menu__item">
            <LinkNav title="Return Home" aria-label="Return Home" to="/">
              Home
            </LinkNav>
          </li>
          <li className="menu__item">
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
