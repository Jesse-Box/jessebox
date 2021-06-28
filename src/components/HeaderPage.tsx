import React from "react"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

interface Props {
  hero?: FluidObject
  alt?: string
  caption?: string
  header: string
  subheader: string
  linkTo?: string
  linkLabel?: string
}

export default function HeaderPage(props: Props) {
  const { hero, alt, caption, header, subheader, linkTo, linkLabel } = props
  return (
    <header className="header header--page">
      {hero ? (
        <figure className="page__hero">
          <Image alt={alt} fluid={hero} />
          <figcaption>{caption}</figcaption>
        </figure>
      ) : null}
      <h1 className="page__title">{header}</h1>
      <div
        className="page__description"
        dangerouslySetInnerHTML={{ __html: subheader }}
      />
      {linkTo ? (
        <div className="page__description">
          <Link to={linkTo}>{linkLabel} </Link>
        </div>
      ) : null}
    </header>
  )
}
