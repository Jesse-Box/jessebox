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
    <section className="gtc-header pb-4">
      <h2 className="gc-header-center">{data.datoCmsAbout.header}</h2>
      <div
        className="gc-header-leanLeft"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsAbout.subheaderNode.childMarkdownRemark.html,
        }}
      />
      <div className="gc-header-leanLeft">
        <Link to={data.datoCmsAbout.linkTo}>{data.datoCmsAbout.linkLabel}</Link>
      </div>
    </section>
  )
}
