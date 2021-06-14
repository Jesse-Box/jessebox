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
    <header>
      {hero ? (
        <figure>
          <Image alt={alt} fluid={hero} />
          <figcaption>{caption}</figcaption>
        </figure>
      ) : null}
      <h1>{header}</h1>
      <h5 className="fontFamily-text-serif">{subheader}</h5>
      {linkTo ? <Link to={linkTo}>{linkLabel}</Link> : null}
    </header>
  )
}
