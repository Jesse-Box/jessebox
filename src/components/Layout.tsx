import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import "../styles/global.css"
import Navigation from "./Navigation"
import Footer from "./Footer"

interface Data {
  datoCmsSite: {
    locale: string
    faviconMetaTags: any
  }
  datoCmsSeoMetaTags: {
    tags: []
  }
}

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  const { children } = props

  const data: Data = useStaticQuery(graphql`
    query seoQuery {
      datoCmsSite {
        locale
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
      >
        <html lang={data.datoCmsSite.locale} />
      </HelmetDatoCms>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
