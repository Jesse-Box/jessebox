import React from "react"

export default function Footer() {
  return (
    <footer className="pb-4">
      <nav className="navigation">
        <ul className="menu">
          <li className="menu__item">
            <a
              title="me@jessebox.net"
              aria-label="Email Address"
              href="mailto:me@jessebox.net"
              className="menu__item__link"
            >
              Email
            </a>
          </li>
          <li className="menu__item">
            <a
              title="Twitter Profile"
              aria-label="Twitter Profile"
              href="https://twitter.com/JesseThomasBox"
              className="menu__item__link"
            >
              Twitter
            </a>
          </li>
          <li className="menu__item">
            <a
              title="Github Profile"
              aria-label="Github Profile"
              href="https://github.com/Jesse-Box"
              className="menu__item__link"
            >
              Github
            </a>
          </li>
          <li className="menu__item">
            <a
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              href="https://www.linkedin.com/in/jesse-box-835346b7/"
              className="menu__item__link"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
