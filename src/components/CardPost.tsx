import React from "react"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

interface Props {
  key: string
  date: string
  title: string
  to: string
  description: string
  alt: string
  fluid: FluidObject
}

export default function CardPost(props: Props) {
  const { key, date, title, to, description, alt, fluid } = props

  return (
    <li key={key}>
      <Image alt={alt} fluid={fluid} />
      <h3>
        <Link title={title} to={to}>
          {title}
        </Link>
      </h3>
      <p
        class="margin-bottom-2"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <h6>{date}</h6>
    </li>
  )
}
