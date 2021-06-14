import React from "react"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { FluidObject } from "gatsby-image"

import Layout from "../components/Layout"
import HeaderPage from "../components/HeaderPage"

interface Data {
  datoCmsAbout: {
    seoMetaTags: {
      tags: []
    }
    hero: {
      alt: string
      title: string
      fluid: FluidObject
    }
    header: string
    subheaderNode: {
      childMarkdownRemark: {
        html: string
      }
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
        <HeaderPage
          hero={data.datoCmsAbout.hero.fluid}
          alt={data.datoCmsAbout.hero.alt}
          caption={data.datoCmsAbout.hero.title}
          header={data.datoCmsAbout.header}
          subheader={data.datoCmsAbout.subheaderNode.childMarkdownRemark.html}
        />
        <section
          class="fontFamily-text-serif"
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
      hero {
        alt
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
        title
      }
      header
      subheaderNode {
        childMarkdownRemark {
          html
        }
      }
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
