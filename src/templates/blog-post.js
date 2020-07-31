/** @jsx jsx */

import { jsx, Styled, Box, Container } from "theme-ui"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const { image } = post.frontmatter
  const imagePath = image && image.childImageSharp.fixed.src

  const imageFluid = post.frontmatter.image.childImageSharp.fluid
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={imagePath}
        type="article"
      />
      <article>
        <Container
          sx={{
            p: [3, 4, 4],
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: "background",
            borderRadius: 2,
          }}
        >
          <header>
            <Box pt={2}>
              <Container sx={{ maxWidth: [0, 1, 2] }}>
                <Styled.h6 sx={{ py: 1 }}>{post.frontmatter.date}</Styled.h6>
                <Styled.h1>{post.frontmatter.title}</Styled.h1>
              </Container>

              <Container py={3} sx={{ maxWidth: 3 }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderColor: "muted",
                    overflow: "hidden",
                  }}
                >
                  <Image alt={post.frontmatter.alt} fluid={imageFluid}></Image>
                </Box>
              </Container>
            </Box>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Container>
      </article>

      <nav>
        <Box py={2}>
          <Styled.ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0,
            }}
          >
            <Styled.li sx={{ width: "50%" }}>
              {previous && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    flexFlow: "column",
                  }}
                >
                  <Styled.h6>Previous</Styled.h6>
                  <Styled.a as={Link} to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Styled.a>
                </Box>
              )}
            </Styled.li>
            <Styled.li
              sx={{
                width: "50%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {next && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    flexFlow: "column",
                  }}
                >
                  <Styled.h6 sx={{ textAlign: "right" }}>Next</Styled.h6>
                  <Styled.a
                    sx={{ textAlign: "right" }}
                    as={Link}
                    to={next.fields.slug}
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </Styled.a>
                </Box>
              )}
            </Styled.li>
          </Styled.ul>
        </Box>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
            fixed {
              src
            }
          }
        }
        alt
      }
    }
  }
`
