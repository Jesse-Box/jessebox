/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"

import Navigation from "./Navigation"
import Bio from "./Bio"

const Layout = ({ location, title, children }) => {
  return (
    <Styled.root>
      <Navigation>{title}</Navigation>
      <main aria-label="Page Content">
        <Container aria-label="Page Header" px={2} py={3}>
          {children}
        </Container>
      </main>
      <footer aria-label="Footer">
        <Container px={2} pb={4}>
          <Bio />
        </Container>
      </footer>
    </Styled.root>
  )
}

export default Layout
