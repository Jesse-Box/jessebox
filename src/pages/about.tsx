import React from "react"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Image, { FluidObject } from "gatsby-image"

import Layout from "../components/Layout"

interface Data {
  datoCmsAbout: {
    seoMetaTags: {
      tags: []
    }
    title: string
    avatar: {
      alt: string
      title: string
      fluid: FluidObject
    }
    bodyNode: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

export default function About(props: PageProps<Data>) {
  const { data } = props

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsAbout.seoMetaTags} />
      <article>
        <header>
          <figure>
            <Image
              alt={data.datoCmsAbout.avatar.alt}
              fluid={data.datoCmsAbout.avatar.fluid}
            />
            <figcaption>{data.datoCmsAbout.avatar.title}</figcaption>
          </figure>
          <h1>{data.datoCmsAbout.title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.bodyNode.childMarkdownRemark.html,
          }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    datoCmsAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      avatar {
        alt
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
        title
      }
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
