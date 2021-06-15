import React from "react"
import LinkNav from "./LinkNav"

export default function Footer() {
  return (
    <footer className="d-flex">
      <span className="px-3 py-2">me(at)jessebox.net</span>
      <nav>
        <ul className="d-flex ls-none m-0 p-0 ">
          <li className="d-flex m-0 p-0">
            <LinkNav
              title="Twitter Profile"
              aria-label="Twitter Profile"
              href="https://twitter.com/JesseThomasBox"
            >
              Twitter
            </LinkNav>
          </li>
          <li className="d-flex m-0 p-0">
            <LinkNav
              title="Github Profile"
              aria-label="Github Profile"
              href="https://github.com/Jesse-Box"
            >
              Github
            </LinkNav>
          </li>
          <li className="d-flex m-0 p-0">
            <LinkNav
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              href="https://www.linkedin.com/in/jesse-box-835346b7/"
            >
              LinkedIn
            </LinkNav>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
