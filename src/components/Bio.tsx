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
    <section className="header header--page">
      <h2 className="page__title">{data.datoCmsAbout.header}</h2>
      <div
        className="page__description"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsAbout.subheaderNode.childMarkdownRemark.html,
        }}
      />
      <div className="page__description">
        <Link to={data.datoCmsAbout.linkTo}>{data.datoCmsAbout.linkLabel}</Link>
      </div>
    </section>
  )
}
