import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

interface Props {
  coverImageSrc?: unknown
  coverImageAlt?: string
  coverImageCaption?: string
  title: string
  summary: string
  linkTo?: string
  linkLabel?: string
}

export default function PageHeader(props: Props) {
  const {
    coverImageSrc,
    coverImageAlt,
    coverImageCaption,
    title,
    summary,
    linkTo,
    linkLabel,
  } = props
  return (
    <header className="container intro">
      {coverImageSrc ? (
        <figure className="intro__hero">
          <GatsbyImage alt={coverImageAlt} image={coverImageSrc} />
          <figcaption>{coverImageCaption}</figcaption>
        </figure>
      ) : null}
      <h1 className="intro__title">{title}</h1>
      <h5 className="intro__summary">{summary}</h5>
      {linkTo ? (
        <div className="intro__summary">
          <Link to={linkTo}>{linkLabel} </Link>
        </div>
      ) : null}
    </header>
  )
}
