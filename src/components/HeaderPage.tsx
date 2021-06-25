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
    <header className="gtc-header pb-4">
      {hero ? (
        <figure className="gc-header-center">
          <Image alt={alt} fluid={hero} />
          <figcaption>{caption}</figcaption>
        </figure>
      ) : null}
      <h1 className="gc-header-center">{header}</h1>
      <div
        className="ff-serif gc-header-leanLeft"
        dangerouslySetInnerHTML={{ __html: subheader }}
      />
      {linkTo ? (
        <div className="gc-header-leanLeft">
          <Link to={linkTo}>{linkLabel} </Link>
        </div>
      ) : null}
    </header>
  )
}
