/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { PageProps, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "../components/Layout"
import PageHeader from "../components/HeaderPage"
import CardPost from "../components/CardPost"

interface Data {
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

function BlogIndex({ data }: PageProps<Data>) {
  const posts = data.allDatoCmsPost.edges

  return (
    <Layout>
      <PageHeader>
        <Styled.h1>All Posts</Styled.h1>
      </PageHeader>
      {posts.map(({ node }) => {
        const title = node.title || node.fields.slug
        return (
          <CardPost
            key={node.slug}
            date={node.date}
            title={title}
            to={node.slug}
            description={node.seo.description}
            alt={node.alt}
            fluid={node.hero.fluid}
          />
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
