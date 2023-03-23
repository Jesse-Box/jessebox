import React from "react"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/Layout"
import HeaderPage from "../components/HeaderPage"
import BodyPost from "../components/BodyPost"

interface Data {
  about: {
    seoMetaTags: {
      tags: []
    }
    hero: {
      alt: string
      title: string
      fluid: FluidObject
    }
    header: string
    subheader: string
    body: {
      id: string
      model: {
        apiKey: string
      }
      text: string
      image: {
        alt: string
        fluid: FluidObject
        model: {
          apiKey: string
        }
        title: string
      }
    }[]
  }
}

export default function About(props: PageProps<Data>) {
  const { data } = props

  return (
    <Layout>
      <HelmetDatoCms seo={data.about.seo} favicon={data.site.favicon} />
      <article>
        <HeaderPage
          hero={data.about.coverImage.gatsbyImageData}
          alt={data.about.coverImage.alt}
          caption={data.about.coverImage.title}
          header={data.about.title}
          subheader={data.about.excerpt}
        />
        <BodyPost content={data.about.content} />
      </article>
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
    about: datoCmsAboutNext {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      content {
        value
        blocks {
          __typename
          id: originalId
          image {
            gatsbyImageData(width: 1500)
          }
        }
      }
      title
      excerpt
      coverImage {
        alt
        title
        gatsbyImageData(width: 1500)
      }
    }
  }
`
