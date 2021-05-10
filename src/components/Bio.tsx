import React from "react"
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
      <div
        dangerouslySetInnerHTML={{
          __html: data.datoCmsAbout.introNode.childMarkdownRemark.html,
        }}
      />
    </section>
  )
}
