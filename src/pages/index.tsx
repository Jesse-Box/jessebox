/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { PageProps, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageHeader from "../components/HeaderPage"
import CardPost from "../components/CardPost"

type Data = {
  datoCmsSite: {
    globalSeo: {
      siteName: string
      fallbackSeo: {
        description: string
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

const BlogIndex = ({ data }: PageProps<Data>) => {
  const siteName = data.datoCmsSite.globalSeo.siteName
  const siteDescription = data.datoCmsSite.globalSeo.fallbackSeo.description
  const posts = data.allDatoCmsPost.edges

  return (
    <Layout title={siteName}>
      <SEO title="Home" description={siteDescription} type="website" />
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
            description={node.description}
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
    datoCmsSite {
      globalSeo {
        siteName
        fallbackSeo {
          description
        }
      }
    }
    allDatoCmsPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          slug
          title
          date
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
