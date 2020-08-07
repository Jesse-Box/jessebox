/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { PageProps, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageHeader from "../components/HeaderPage"
import CardPost from "../components/CardPost"

type Data = {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
  allMdx: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          image: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
          alt: string
          tags: []
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" description={siteDescription} type="website" />
      <PageHeader>
        <Styled.h1>All Posts</Styled.h1>
      </PageHeader>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <CardPost
            key={node.fields.slug}
            date={node.frontmatter.date}
            title={title}
            to={node.fields.slug}
            description={node.frontmatter.description}
            excerpt={node.excerpt}
            alt={node.frontmatter.alt}
            fluid={node.frontmatter.image.childImageSharp.fluid}
          />
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`
