/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import Navigation from "./Navigation"

interface Data {
  datoCmsSite: {
    globalSeo: {
      siteName: string
    }
    faviconMetaTags: any
    datoCmsSeoMetaTags: any
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
    <Styled.root>
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsSeoMetaTags}
      />
      <Navigation />
      <main aria-label="Page Content">
        <Container
          aria-label="Page Header"
          px={2}
          py={3}
          sx={{ maxWidth: [0, 1, 2] }}
        >
          {children}
        </Container>
      </main>
    </Styled.root>
  )
}

export default Layout
