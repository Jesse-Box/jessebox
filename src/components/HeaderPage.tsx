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
    <header className="container intro">
      {hero ? (
        <figure className="intro__hero">
          <Image alt={alt} fluid={hero} />
          <figcaption>{caption}</figcaption>
        </figure>
      ) : null}
      <h1 className="intro__title">{header}</h1>
      <div
        className="intro__description"
        dangerouslySetInnerHTML={{ __html: subheader }}
      />
      {linkTo ? (
        <div className="intro__description">
          <Link to={linkTo}>{linkLabel} </Link>
        </div>
      ) : null}
    </header>
  )
}
