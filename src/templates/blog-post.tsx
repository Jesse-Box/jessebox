/** @jsx jsx */

import { jsx, Styled, BaseStyles, Box } from "theme-ui"
import { graphql, PageProps } from "gatsby"
import Image, { FluidObject, FixedObject } from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Grid from "../components/Grid"
import Layout from "../components/Layout"
import HeaderPost from "../components/HeaderPost"
import PaginationPost from "../components/PaginationPost"
import ListPost from "../components/ListPost"
import Bio from "../components/Bio"

type Data = {
  datoCmsSite: {
    globalSeo: {
      siteName: string
    }
  }
  datoCmsPost: {
    seo: {
      image: {
        fixed: FixedObject
      }
      title: string
      description: string
    }
    seoMetaTags: {
      tags: []
    }
    title: string
    date: string
    hero: {
      alt: string
      fluid: FluidObject
    }
    body: any

    pageContext: {
      next: {
        slug: string
        title: string
      }
      prev: {
        slug: string
        title: string
      }
      slug: string
    }
  }
}

function BlogPostTemplate({ data, pageContext }: PageProps<Data>) {
  const post = data.datoCmsPost
  console.log(data.datoCmsPost.body)
  const { previous, next } = pageContext

  const imageFluid = post.hero.fluid

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsPost.seoMetaTags} />
      <article sx={{ pb: [3, 4, 5] }}>
        <HeaderPost
          date={post.date}
          title={post.title}
          description={post.seo.description}
          alt={post.hero.alt}
          fluid={imageFluid}
        />
        <Grid>
          {data.datoCmsPost.body.map((block, index) => (
            <div
              sx={{ gridColumn: block.model.apiKey === "visual" ? "1/4" : "2" }}
              key={`${block.model.id}-${index}`}
            >
              {block.model.apiKey === "text" && (
                <BaseStyles>
                  <Styled.div
                    dangerouslySetInnerHTML={{
                      __html: block.textNode.childMarkdownRemark.html,
                    }}
                  />
                </BaseStyles>
              )}
              {block.model.apiKey === "visual" && (
                <Box my={[3, 4, 5]}>
                  <Image
                    sx={{ mb: [2, 3, 4] }}
                    fluid={block.media.fluid}
                    alt={block.media.alt}
                  />
                  <Styled.h6>{block.media.title}</Styled.h6>
                </Box>
              )}
            </div>
          ))}
        </Grid>
      </article>
      {previous || next ? (
        <PaginationPost>
          <Styled.li sx={{ flex: "1 1 50%" }}>
            {previous && (
              <ListPost
                rel="prev"
                to={`/${previous.slug}`}
                title={previous.title}
              />
            )}
          </Styled.li>
          <Styled.li sx={{ flex: "1 1 50%" }}>
            {next && (
              <ListPost rel="next" to={`/${next.slug}`} title={next.title} />
            )}
          </Styled.li>
        </PaginationPost>
      ) : null}
      <Bio />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    datoCmsPost(slug: { eq: $slug }) {
      seo {
        description
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      title
      date(formatString: "MMMM DD, YYYY")
      hero {
        alt
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }
      body {
        ... on DatoCmsText {
          model {
            apiKey
          }
          textNode {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on DatoCmsVisual {
          model {
            apiKey
          }
          media {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
            title
            alt
          }
        }
      }
    }
  }
`
