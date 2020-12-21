/** @jsx jsx */
import { jsx, Styled, Container, BaseStyles } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  datoCmsAbout: {
    introNode: {
      childMarkdownRemark: {
        html: React.ReactNode
      }
    }
  }
}

function Bio() {
  const data: Data = useStaticQuery(graphql`
    query BioQuery {
      datoCmsAbout {
        introNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  return (
    <Container p={[2, 3, 3]}>
      <BaseStyles>
        <Styled.div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.introNode.childMarkdownRemark.html,
          }}
          aria-label="About me"
        />
      </BaseStyles>
    </Container>
  )
}

export default Bio
