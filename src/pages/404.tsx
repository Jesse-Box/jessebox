import React from "react"
import { PageProps, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/layout"
import HeaderPage from "../components/page-header"
import CardPost from "../components/post-list-item"
import PostList from "../components/post-list"

interface Data {
  datoCmsNotFound: {
    seoMetaTags: {
      tags: []
    }
    header: string
    subheader: string
    linkTo: string
    linkLabel: string
  }
  allDatoCmsPost: {
    edges: {
      node: {
        slug: string
        title: string
        date: string
        hero: {
          alt: string
          fluid: FluidObject
        }
      }
    }
  }
}

export default function NotFoundPage(props: PageProps<Data>) {
  const { data } = props

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsNotFound.seoMetaTags} />
      <HeaderPage
        header={data.datoCmsNotFound.header}
        subheader={data.datoCmsNotFound.subheader}
        linkTo={data.datoCmsNotFound.linkTo}
        linkLabel={data.datoCmsNotFound.linkLabel}
      />
      <PostList />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    datoCmsNotFound {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      header
      subheader
      linkTo
      linkLabel
    }
    allDatoCmsPost(sort: { date: DESC }) {
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
