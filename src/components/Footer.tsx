import React from "react"

export default function Footer() {
  return (
    <footer className="pb-4">
      <nav className="gtc-nav">
        <ul className="gc-nav-center d-flex ff-row-wrap ls-none m-0 p-0 ">
          <li className="d-flex m-0 p-0">
            <a
              title="me@jessebox.net"
              aria-label="Email Address"
              href="mailto:me@jessebox.net"
              className="link-button-transparent"
            >
              Email
            </a>
          </li>
          <li className="d-flex m-0 p-0">
            <a
              title="Twitter Profile"
              aria-label="Twitter Profile"
              href="https://twitter.com/JesseThomasBox"
              className="link-button-transparent"
            >
              Twitter
            </a>
          </li>
          <li className="d-flex m-0 p-0">
            <a
              title="Github Profile"
              aria-label="Github Profile"
              href="https://github.com/Jesse-Box"
              className="link-button-transparent"
            >
              Github
            </a>
          </li>
          <li className="d-flex m-0 p-0">
            <a
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              href="https://www.linkedin.com/in/jesse-box-835346b7/"
              className="link-button-transparent"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
