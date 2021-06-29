import React from "react"
import { graphql, PageProps } from "gatsby"
import Image, { FluidObject, FixedObject } from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import ListPost from "../components/ListPost"

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
}

export default function BlogPostTemplate(props: PageProps<Data>) {
  const { data, pageContext } = props

  const { previous, next } = pageContext

  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsPost.seoMetaTags} />
      <article>
        <header className="header header--page">
          <figure className="page__hero--post">
            <Image
              alt={data.datoCmsPost.hero.alt}
              fluid={data.datoCmsPost.hero.fluid}
            />
          </figure>
          <h1 className="page__title">{data.datoCmsPost.title}</h1>
          <h5 className="page__description">
            {data.datoCmsPost.seo.description}
          </h5>
          <h6 className="page__description">{data.datoCmsPost.date}</h6>
        </header>
        <section className="post">
          {data.datoCmsPost.body.map((block) => (
            <div
              className={
                block.model.apiKey === "visual" ? "post__visual" : "post__text"
              }
              key={block.id}
            >
              {block.model.apiKey === "text" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: block.textNode.childMarkdownRemark.html,
                  }}
                />
              )}
              {block.model.apiKey === "visual" && (
                <figure>
                  <Image
                    className="post__visual__media"
                    fluid={block.media.fluid}
                    alt={block.media.alt}
                  />
                  <figcaption>{block.media.title}</figcaption>
                </figure>
              )}
            </div>
          ))}
        </section>
      </article>
      {previous || next ? (
        <nav className="header">
          <ul className="list list--pagination">
            <li className="list__item pagination__item--prev">
              {previous && (
                <ListPost
                  rel="prev"
                  to={`/${previous.slug}`}
                  title={previous.title}
                />
              )}
            </li>
            <li className="list_item pagination__item--next">
              {next && (
                <ListPost rel="next" to={`/${next.slug}`} title={next.title} />
              )}
            </li>
          </ul>
        </nav>
      ) : null}
      <Bio />
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
  }
`
