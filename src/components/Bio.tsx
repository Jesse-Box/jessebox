import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  datoCmsAbout: {
    header: string
    subheaderNode: {
      childMarkdownRemark: {
        html: "string"
      }
    }
    linkTo: string
    linkLabel: string
  }
}

export default function Bio() {
  const data: Data = useStaticQuery(graphql`
    query BioQuery {
      datoCmsAbout {
        header
        subheaderNode {
          childMarkdownRemark {
            html
          }
        }
        linkTo
        linkLabel
      }
    }
  `)

  return (
    <>
      <h2>{data.datoCmsAbout.header}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: data.datoCmsAbout.subheaderNode.childMarkdownRemark.html,
        }}
      />
      <Link to={data.datoCmsAbout.linkTo}>
        {data.datoCmsAbout.linkLabel} &rarr;
      </Link>
    </>
  )
}
