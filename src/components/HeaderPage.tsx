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
    <header className="display-grid gridTemplateColumns-header">
      {hero ? (
        <figure className="gridColumn-header-span-1to3">
          <Image alt={alt} fluid={hero} />
          <figcaption>{caption}</figcaption>
        </figure>
      ) : null}
      <h1 className="gridColumn-header-span-1to3">{header}</h1>
      <div
        className="fontFamily-text-serif gridColumn-header-span-1to2"
        dangerouslySetInnerHTML={{ __html: subheader }}
      />
      {linkTo ? (
        <Link className="gridColumn-header-span-1to3" to={linkTo}>
          {linkLabel} &rarr;
        </Link>
      ) : null}
    </header>
  )
}
