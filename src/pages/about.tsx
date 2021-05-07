import React from "react"
import { PageProps, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { FluidObject } from "gatsby-image"

import Grid from "../components/Grid"
import Layout from "../components/Layout"
import HeaderPost from "../components/HeaderPost"

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

function About({ data }: PageProps<Data>) {
  const aboutPage = data.datoCmsAbout

  return (
    <Layout>
      <HelmetDatoCms seo={aboutPage.seoMetaTags} />
      <article>
        <HeaderPost
          title={aboutPage.title}
          alt={aboutPage.avatar.alt}
          caption={aboutPage.avatar.title}
          fluid={aboutPage.avatar.fluid}
        />
        <Grid>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAbout.bodyNode.childMarkdownRemark.html,
              }}
            />
          </div>
        </Grid>
      </article>
    </Layout>
  )
}

export default About

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
