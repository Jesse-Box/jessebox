/** @jsx jsx */
import { jsx } from "theme-ui"

import Grid from "./Grid"
import LinkNav from "./LinkNav"

function Footer() {
  return (
    <footer sx={{ py: [2, 3, 4] }}>
      <Grid>
        <nav
          sx={{
            gridColumn: "1/4",
            py: [3, 4, 5],
            display: "flex",
            flexFlow: ["column wrap", "row wrap"],
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span sx={{ color: "secondary" }}>me(at)jessebox.net</span>
          <ul
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              listStyle: "none",
              p: 0,
            }}
          >
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

export default Footer
