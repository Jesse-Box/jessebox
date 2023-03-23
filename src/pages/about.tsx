import React from "react"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import PostBody from "../components/post-body"

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
        <PageHeader
          coverImageSrc={data.about.coverImage.gatsbyImageData}
          coverImageAlt={data.about.coverImage.alt}
          coverImageCaption={data.about.coverImage.title}
          title={data.about.title}
          summary={data.about.summary}
        />
        <PostBody content={data.about.content} />
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
      coverImage {
        alt
        title
        gatsbyImageData(width: 1500)
      }
      title
      summary
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
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
