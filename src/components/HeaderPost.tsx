import React from "react"
import Image, { FluidObject } from "gatsby-image"

interface Props {
  date?: string
  title: string
  description?: string
  alt: string
  caption?: string
  fluid: FluidObject
}

export default function HeaderPost(props: Props) {
  const { date, title, description, alt, caption, fluid } = props
  return (
    <header>
      <div>
        <Image alt={alt} fluid={fluid} />
        {caption ? <h6>{caption}</h6> : null}
      </div>
      <h1>{title}</h1>
      <h5>{description}</h5>
      <h6>{date}</h6>
    </header>
  )
}
