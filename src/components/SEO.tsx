/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import defaultOpenGraphImage from "../../content/assets/opengraph-default.png"

type Data = {
  site: {
    siteMetadata: {
      title: string
      author: {
        name: string
      }
      siteUrl: string
    }
  }
}

interface Props {
  description: string
  lang: string
  meta: []
  keywords: []
  title: string
  type: string
  image: string
}

const SEO: React.FC<Props> = ({
  description,
  lang,
  meta,
  keywords,
  title,
  type,
  image,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const ogImageUrl =
          data.site.siteMetadata.siteUrl + (image || defaultOpenGraphImage)
        const ogType = type
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `image`,
                content: ogImageUrl,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: ogType,
              },
              {
                property: `og:image`,
                content: ogImageUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: ogImageUrl,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        author {
          name
        }
        siteUrl
      }
    }
  }
`
