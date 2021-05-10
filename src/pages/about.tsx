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

  //DRY'ing query strings
  const about = data.datoCmsAbout
  const seo = about.seoMetaTags
  const avatar = about.avatar.fluid
  const avatarAlt = about.avatar.alt
  const avatarCaption = about.avatar.title
  const title = about.title
  const body = about.bodyNode.childMarkdownRemark.html

  return (
    <Layout>
      <HelmetDatoCms seo={seo} />
      <article>
        <header>
          <figure>
            <Image alt={avatarAlt} fluid={avatar} />
            <figcaption>{avatarCaption}</figcaption>
          </figure>
          <h1>{title}</h1>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: body,
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
