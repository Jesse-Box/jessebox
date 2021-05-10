import React from "react"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/Layout"

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

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsNotFound.seoMetaTags} />
      <header
        dangerouslySetInnerHTML={{
          __html: data.datoCmsNotFound.introNode.childMarkdownRemark.html,
        }}
      />
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
