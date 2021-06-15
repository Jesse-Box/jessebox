import React from "react"
import { PageProps, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Layout from "../components/Layout"
import HeaderPage from "../components/HeaderPage"
import CardPost from "../components/CardPost"

interface Data {
  datoCmsHome: {
    seoMetaTags: {
      tags: []
    }
    header: string
    subheaderNode: {
      childMarkdownRemark: {
        html: string
      }
    }
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

export default function BlogIndex(props: PageProps<Data>) {
  const { data } = props

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsHome.seoMetaTags} />
      <HeaderPage
        header={data.datoCmsHome.header}
        subheader={data.datoCmsHome.subheaderNode.childMarkdownRemark.html}
        linkTo={data.datoCmsHome.linkTo}
        linkLabel={data.datoCmsHome.linkLabel}
      />
      <section className="display-grid gridTemplateColumns-body">
        <span className="gridColumn-body-span-2to3">Recent Posts</span>
        <ul className="listStyle-none gridColumn-body-span-2to3">
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
      header
      subheaderNode {
        childMarkdownRemark {
          html
        }
      }
      linkTo
      linkLabel
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
