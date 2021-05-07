import React from "react"
import { graphql, PageProps } from "gatsby"
import Image, { FluidObject, FixedObject } from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Grid from "../components/Grid"
import Layout from "../components/Layout"
import HeaderPost from "../components/HeaderPost"
import PaginationPost from "../components/PaginationPost"
import ListPost from "../components/ListPost"
import BlockText from "../components/BlockText"

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
    body: {
      id: string
      model: {
        apiKey: string
        id: string
      }
      textNode: {
        childMarkdownRemark: {
          html: string
        }
      }
      media: {
        alt: string
        fluid: FluidObject
        title: string
      }
    }[]

    pageContext: {
      next: {
        slug: string
        title: string
      }
      previous: {
        slug: string
        title: string
      }
      slug: string
    }
  }
  datoCmsAbout: {
    introNode: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

export default function BlogPostTemplate(props: PageProps<Data>) {
  const { data, pageContext } = props
  const post = data.datoCmsPost
  const { previous, next } = pageContext

  console.log(previous)

  const imageFluid = post.hero.fluid
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsPost.seoMetaTags} />
      <article>
        <HeaderPost
          date={post.date}
          title={post.title}
          description={post.seo.description}
          alt={post.hero.alt}
          fluid={imageFluid}
        />
        <Grid>
          {data.datoCmsPost.body.map((block) => (
            <div key={block.id}>
              {block.model.apiKey === "text" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: block.textNode.childMarkdownRemark.html,
                  }}
                />
              )}
              {block.model.apiKey === "visual" && (
                <div>
                  <Image fluid={block.media.fluid} alt={block.media.alt} />
                  <h6>{block.media.title}</h6>
                </div>
              )}
            </div>
          ))}
        </Grid>
      </article>
      {previous || next ? (
        <PaginationPost>
          <li>
            {previous && (
              <ListPost
                rel="prev"
                to={`/${previous.slug}`}
                title={previous.title}
              />
            )}
          </li>
          <li>
            {next && (
              <ListPost rel="next" to={`/${next.slug}`} title={next.title} />
            )}
          </li>
        </PaginationPost>
      ) : null}
      <BlockText html={data.datoCmsAbout.introNode.childMarkdownRemark.html} />
    </Layout>
  )
}

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
          id
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
          id
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
    datoCmsAbout {
      introNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
