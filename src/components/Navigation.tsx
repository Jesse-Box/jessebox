import React from "react"
import LinkNav from "./LinkNav"

export default function Navigation() {
  return (
    <header>
      <nav className="gtc-nav w-fill">
        <ul className="gc-nav-center d-flex ls-none p-0 m-0">
          <li className="d-flex lsnone p-0 m-0">
            <LinkNav title="Return Home" aria-label="Return Home" to="/">
              Home
            </LinkNav>
          </li>
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
