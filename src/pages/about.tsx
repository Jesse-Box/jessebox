import React from "react"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import Image, { FluidObject } from "gatsby-image"

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
    body: {
      id: string
      model: {
        apiKey: string
        id: string
      }
      textNode: {
        childMarkdownRemark: {
          html: string
        }
      }
      media: {
        alt: string
        fluid: FluidObject
        title: string
      }
    }[]
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
        <section className="fontFamily-text-serif display-grid gridTemplateColumns-body">
          {data.datoCmsAbout.body.map((block) => (
            <div
              className={
                block.model.apiKey === "visual"
                  ? "gridColumn-body-span-1to4"
                  : "gridColumn-body-span-2to3"
              }
              key={block.id}
            >
              {block.model.apiKey === "text" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: block.textNode.childMarkdownRemark.html,
                  }}
                />
              )}
              {block.model.apiKey === "visual" && (
                <figure className="margin-bottom-3">
                  <Image fluid={block.media.fluid} alt={block.media.alt} />
                  <figcaption>{block.media.title}</figcaption>
                </figure>
              )}
            </div>
          ))}
        </section>
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
      body {
        ... on DatoCmsText {
          id
          model {
            apiKey
          }
          textNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsVisual {
          id
          model {
            apiKey
          }
          media {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
            title
            alt
          }
        }
      }
    }
  }
`
