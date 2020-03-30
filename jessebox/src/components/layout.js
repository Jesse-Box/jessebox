/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navigation from "./navigation"
import { Container } from "theme-ui"

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <main>
        <Container px={2} py={6} sx={{ maxWidth: 0 }}>
          {children}
        </Container>
      </main>
    </>
  )
}

export default Layout
