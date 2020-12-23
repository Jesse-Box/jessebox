/** @jsx jsx */
import { jsx, Styled, BaseStyles } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  datoCmsAbout: {
    introNode: {
      childMarkdownRemark: {
        html: "string"
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
    <section>
      <BaseStyles>
        <Styled.div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.introNode.childMarkdownRemark.html,
          }}
          aria-label="About me"
          sx={{ mx: "auto", maxWidth: [0, 1, 2] }}
        />
      </BaseStyles>
    </section>
  )
}

export default Bio
