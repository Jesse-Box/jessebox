import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Navigation from "./Navigation"
import Footer from "./Footer"

interface Data {
  datoCmsSite: {
    globalSeo: {
      siteName: string
    }
    faviconMetaTags: any
  }
  datoCmsSeoMetaTags: {
    tags: []
  }
}

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  const data: Data = useStaticQuery(graphql`
    query seoQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsSeoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  `)

  return (
    <>
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsSeoMetaTags}
      />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
