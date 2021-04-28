/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Navigation from "./Navigation"
import Footer from "./Footer"

interface Data {
  datoCmsSite: {
    locale: string
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
        locale
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
    <Styled.root>
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsSeoMetaTags}
      >
        <html lang={data.datoCmsSite.locale} />
      </HelmetDatoCms>
      <Navigation />
      <main sx={{ mx: "auto", px: [2, 3, 4] }}>{children}</main>
      <Footer />
    </Styled.root>
  )
}

export default Layout
