import React from "react"

export default function Footer() {
  return (
    <footer className="container">
      <nav className="nav">
        <ul className="list list_nav">
          <li className="list__item">
            <a
              title="me@jessebox.net"
              aria-label="Email Address"
              href="mailto:me@jessebox.net"
              className="link-button"
            >
              Email
            </a>
          </li>
          <li className="list__item">
            <a
              title="Twitter Profile"
              aria-label="Twitter Profile"
              href="https://twitter.com/JesseThomasBox"
              className="link-button"
            >
              Twitter
            </a>
          </li>
          <li className="list__item">
            <a
              title="Github Profile"
              aria-label="Github Profile"
              href="https://github.com/Jesse-Box"
              className="link-button"
            >
              Github
            </a>
          </li>
          <li className="list__item">
            <a
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              href="https://www.linkedin.com/in/jesse-box-835346b7/"
              className="link-button"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
