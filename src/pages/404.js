/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageHeader from "../components/HeaderPage"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="404: Not Found"
        description={siteDescription}
        type="website"
      />
      <PageHeader>
        <Styled.h1>Not Found</Styled.h1>
        <Styled.p>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Styled.p>
      </PageHeader>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
