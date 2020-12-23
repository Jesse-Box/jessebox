/** @jsx jsx */
import { jsx, Styled, BaseStyles } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Grid from "./Grid"

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
        <Grid>
          <Styled.div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsAbout.introNode.childMarkdownRemark.html,
            }}
            aria-label="About me"
            sx={{ gridColumn: "2", mb: [3, 4, 5] }}
          />
        </Grid>
      </BaseStyles>
    </section>
  )
}

export default Bio
