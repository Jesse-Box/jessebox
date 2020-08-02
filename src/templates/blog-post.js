/** @jsx jsx */

import { jsx, Styled, Box, Container } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Image from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PaginationPost from "../components/PaginationPost"
import ListPost from "../components/ListPost"
import ContainerText from "../components/ContainerText"
import FrameImage from "../components/FrameImage"

const BlogPostTemplate = props => {
  const { data, pageContext, location } = props

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
              <ContainerText>
                <Styled.h6 sx={{ py: 1 }}>{post.frontmatter.date}</Styled.h6>
                <Styled.h1>{post.frontmatter.title}</Styled.h1>
              </ContainerText>
              <FrameImage>
                <Image alt={post.frontmatter.alt} fluid={imageFluid}></Image>
              </FrameImage>
            </Box>
          </header>
          <MDXProvider
            components={{
              wrapper: props => (
                <main {...props} sx={{ maxWidth: 3, mx: "auto" }} />
              ),
              p: props => <p {...props} sx={{ maxWidth: 2, mx: "auto" }} />,
              Image,
            }}
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </article>
      <PaginationPost>
        <Styled.li sx={{ flex: "1 1 50%" }}>
          {previous && <ListPost rel="prev" to={previous.fields.slug} />}
        </Styled.li>
        <Styled.li sx={{ flex: "1 1 50%" }}>
          {next && <ListPost rel="next" to={next.fields.slug} />}
        </Styled.li>
      </PaginationPost>
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
