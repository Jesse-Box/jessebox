import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Wrapper = styled.header`
  background-color: blue;
  border-bottom: 2px solid #343f46;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function Header({ siteTitle }) {
  return (
    <Wrapper>
      <Container>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            css={{
              color: `white`,
              textDecoration: `underline`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </Container>
    </Wrapper>
  )
}

export default Header
