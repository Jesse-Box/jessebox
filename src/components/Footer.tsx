import React from "react"
import Grid from "./Grid"
import LinkNav from "./LinkNav"

export default function Footer() {
  return (
    <footer>
      <Grid>
        <nav>
          <span>me(at)jessebox.net</span>
          <ul>
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
      </Grid>
    </footer>
  )
}
