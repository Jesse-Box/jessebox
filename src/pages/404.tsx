import React from "react"
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

export default function NotFoundPage(props: PageProps<Data>) {
  const { data } = props

  //DRY'ing query strings
  const notFound = data.datoCmsNotFound
  const seo = notFound.seoMetaTags
  const body = notFound.introNode.childMarkdownRemark.html

  return (
    <Layout>
      <HelmetDatoCms seo={seo} />
      <BlockText html={body} />
    </Layout>
  )
}

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
