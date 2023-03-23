import React from "react"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/layout"
import HeaderPage from "../components/page-header"
import PostList from "../components/post-list"

interface Data {
  datoCmsHome: {
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
        id: string
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

export default function BlogIndex(props: PageProps<Data>) {
  const { data } = props

  return (
    <Layout>
      <HelmetDatoCms seo={data.home.seo} favicon={data.site.favicon} />
      <HeaderPage
        title={data.home.title}
        summary={data.home.summary}
        linkTo={data.home.linkTo}
        linkLabel={data.home.linkLabel}
      />
      <PostList />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    home: datoCmsHomeNext {
      title
      summary
      linkTo
      linkLabel
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
