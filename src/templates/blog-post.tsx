/** @jsx jsx */

import { jsx, Styled, Container } from "theme-ui"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeaderPost from "../components/HeaderPost"
import PaginationPost from "../components/PaginationPost"
import ListPost from "../components/ListPost"
import { Img, FluidObject, FixedObject } from "gatsby-image"

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
    title: string
    date: string
    hero: {
      alt: string
      fluid: FluidObject
    }
    body: any
    pageContext: any
  }
}

function BlogPostTemplate({ data, pageContext }: PageProps<Data>) {
  const post = data.datoCmsPost

  const siteName = data.datoCmsSite.globalSeo.siteName
  const { previous, next } = pageContext

  const { image } = post.seo.image
  const imagePath = image && image.fixed.src

  const imageFluid = post.hero.fluid

  return (
    <Layout title={siteName}>
      <SEO
        title={post.title}
        description={post.seo.description}
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
            date={post.date}
            title={post.title}
            alt={post.hero.alt}
            fluid={imageFluid}
          />
          <main>
            {data.datoCmsPost.body.map((block) => (
              <div key={block.id}>
                {block.model.apiKey === "header2" && (
                  <Styled.h2>{block.header2}</Styled.h2>
                )}
                {block.model.apiKey === "paragraph" && (
                  <Styled.p>{block.paragraph}</Styled.p>
                )}
                {block.model.apiKey === "listdot" && (
                  <Styled.ul>{block.listdot}</Styled.ul>
                )}
                {block.model.apiKey === "visual" && (
                  <>
                    <Img alt={block.media.alt} fluid={block.media.fluid} />
                    <Styled.div>{block.media.title}</Styled.div>
                  </>
                )}
                {block.model.apiKey === "youtube" && (
                  <Styled.div>{block.youtube}</Styled.div>
                )}
              </div>
            ))}
          </main>
        </Container>
      </article>
      {previous || next ? (
        <PaginationPost>
          <Styled.li sx={{ flex: "1 1 50%" }}>
            {previous && (
              <ListPost rel="prev" to={previous.slug} title={previous.title} />
            )}
          </Styled.li>
          <Styled.li sx={{ flex: "1 1 50%" }}>
            {next && <ListPost rel="next" to={next.slug} title={next.title} />}
          </Styled.li>
        </PaginationPost>
      ) : null}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    datoCmsSite {
      globalSeo {
        siteName
        fallbackSeo {
          description
        }
      }
    }
    datoCmsPost(slug: { eq: $slug }) {
      seo {
        image {
          fixed {
            src
          }
        }
        title
        description
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
        ... on DatoCmsHeader2 {
          model {
            apiKey
          }
          header2
        }
        ... on DatoCmsParagraph {
          model {
            apiKey
          }
          paragraph
        }
        ... on DatoCmsListdot {
          model {
            apiKey
          }
          listdot
        }
        ... on DatoCmsVisual {
          model {
            apiKey
          }
          media {
            fluid {
              ...GatsbyDatoCmsFluid
            }
            title
            alt
          }
        }
        ... on DatoCmsYoutube {
          model {
            apiKey
          }
          youtube {
            title
            url
            thumbnailUrl
          }
        }
      }
    }
  }
`
