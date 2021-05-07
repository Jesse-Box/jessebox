import React from "react"
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

export default function Bio() {
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
      <Grid>
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsAbout.introNode.childMarkdownRemark.html,
          }}
          aria-label="About me"
        />
      </Grid>
    </section>
  )
}
