import React from "react"

export default function Footer() {
  return (
    <footer className="d-flex">
      <nav className="gtc-nav">
        <ul className="gc-nav-center d-flex ls-none m-0 p-0 ">
          <li className="d-flex m-0 p-0">
            <a
              title="me@jessebox.net"
              aria-label="Email Address"
              href="mailto:me@jessebox.net"
            >
              Email
            </a>
          </li>
          <li className="d-flex m-0 p-0">
            <a
              title="Twitter Profile"
              aria-label="Twitter Profile"
              href="https://twitter.com/JesseThomasBox"
            >
              Twitter
            </a>
          </li>
          <li className="d-flex m-0 p-0">
            <a
              title="Github Profile"
              aria-label="Github Profile"
              href="https://github.com/Jesse-Box"
            >
              Github
            </a>
          </li>
          <li className="d-flex m-0 p-0">
            <a
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              href="https://www.linkedin.com/in/jesse-box-835346b7/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
