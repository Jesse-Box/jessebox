/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import LinkNav from "./LinkNav"

function Footer() {
  return (
    <footer sx={{ maxWidth: [0, 1, 2], mx: "auto" }}>
      <nav
        sx={{
          display: "flex",
          flexFlow: ["column wrap", "row wrap"],
          justifyContent: "spaceBetween",
          alignItems: "center",
        }}
      >
        <LinkNav title="Home" to="/" ariaLabel="Home">
          Jesse Box
        </LinkNav>
        <ul
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            listStyle: "none",
          }}
        >
          <li>
            <LinkNav
              title="me@jessebox.net"
              aria-label="Email Address"
              href="mailto: me@jessebox.net"
            >
              Email
            </LinkNav>
          </li>
          <li>
            <LinkNav
              title="Twitter Profile"
              aria-label="Twitter Profile"
              href="https://twitter.com/JesseThomasBox"
            >
              Twitter
            </LinkNav>
          </li>
          <li>
            <LinkNav
              title="Github Profile"
              aria-label="Github Profile"
              href="https://github.com/Jesse-Box"
            >
              Github
            </LinkNav>
          </li>
          <li>
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

export default Footer
