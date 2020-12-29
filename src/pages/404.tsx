/** @jsx jsx */
import { jsx } from "theme-ui"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/Layout"
import BlockText from "../components/BlockText"

interface Data {
  datoCmsNotFound: {
    seoMetaTags: {
      tags: []
    }
    introNode: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

function NotFoundPage({ data }: PageProps<Data>) {
  const notFoundPage = data.datoCmsNotFound
  return (
    <Layout>
      <HelmetDatoCms seo={notFoundPage.seoMetaTags} />
      <BlockText html={notFoundPage.introNode.childMarkdownRemark.html} />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    datoCmsNotFound {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introNode {
        childMarkdownRemark {
          html
        }
      }
    }
    allDatoCmsPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          seo {
            description
          }
          hero {
            alt
            fluid(maxWidth: 800) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
