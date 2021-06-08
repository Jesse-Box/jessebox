import React from "react"
import { PageProps, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/Layout"
import CardPost from "../components/CardPost"

interface Data {
  datoCmsHome: {
    seoMetaTags: {
      tags: []
    }
    introNode: {
      childMarkdownRemark: {
        html: string
      }
    }
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

export default function BlogIndex(props: PageProps<Data>) {
  const { data } = props

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsHome.seoMetaTags} />
      <header
        dangerouslySetInnerHTML={{
          __html: data.datoCmsHome.introNode.childMarkdownRemark.html,
        }}
      ></header>
      <section>
        <p>Recent Posts</p>
        <ul className="listStyle-none">
          {data.allDatoCmsPost.edges.map(({ node }) => {
            return (
              <CardPost
                key={node.slug}
                date={node.date}
                title={node.title}
                to={node.slug}
                description={node.seo.description}
                alt={node.alt}
                fluid={node.hero.fluid}
              />
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    datoCmsHome {
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
