/** @jsx jsx */

import { jsx, Styled, Container } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeaderPost from "../components/HeaderPost"
import PaginationPost from "../components/PaginationPost"
import ListPost from "../components/ListPost"
import { FluidObject, FixedObject } from "gatsby-image"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  mdx: {
    id: string
    excerpt: string
    body: string
    frontmatter: {
      title: string
      date: string
      description: string
      image: {
        childImageSharp: {
          fluid: FluidObject
          fixed: FixedObject
        }
      }
      alt: string
    }
  }
}

interface Props {
  data: {
    mdx: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  pageContext: any
}

function BlogPostTemplate(props: Props) {
  const { data, pageContext } = props

  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const { image } = post.frontmatter
  const imagePath = image && image.childImageSharp.fixed.src

  const imageFluid = post.frontmatter.image.childImageSharp.fluid

  return (
    <Layout title={siteTitle}>
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
          <HeaderPost
            date={post.frontmatter.date}
            title={post.frontmatter.title}
            alt={post.frontmatter.alt}
            fluid={imageFluid}
          />
          <MDXProvider>
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </article>
      {previous || next ? (
        <PaginationPost>
          <Styled.li sx={{ flex: "1 1 50%" }}>
            {previous && (
              <ListPost
                rel="prev"
                to={previous.fields.slug}
                title={previous.frontmatter.title}
              />
            )}
          </Styled.li>
          <Styled.li sx={{ flex: "1 1 50%" }}>
            {next && (
              <ListPost
                rel="next"
                to={next.fields.slug}
                title={next.frontmatter.title}
              />
            )}
          </Styled.li>
        </PaginationPost>
      ) : null}
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
