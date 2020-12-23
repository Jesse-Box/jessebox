/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { PageProps, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Grid from "../components/Grid"
import Layout from "../components/Layout"
import CardPost from "../components/CardPost"
import Bio from "../components/Bio"

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
      <Bio />
      <section>
        <Grid>
          <Styled.ul sx={{ listStyle: "none", gridColumn: "2" }}>
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
          </Styled.ul>
        </Grid>
      </section>
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
