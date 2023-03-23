import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

interface Data {
  datoCmsAbout: {
    header: string
    subheader: string
    linkTo: string
    linkLabel: string
  }
}

export default function Bio() {
  const data: Data = useStaticQuery(graphql`
    query BioQuery {
      datoCmsAbout {
        header
        subheader
        linkTo
        linkLabel
      }
    }
  `)

  return (
    <section className="container intro">
      <h2 className="intro__title">{data.datoCmsAbout.header}</h2>
      <div
        className="intro__summary"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsAbout.subheader,
        }}
      />
      <div className="intro__summary">
        <Link to={data.datoCmsAbout.linkTo}>{data.datoCmsAbout.linkLabel}</Link>
      </div>
    </section>
  )
}
