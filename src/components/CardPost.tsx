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
    <li className="px-0 pb-3" key={key}>
      <figure className="mb-2">
        <Image alt={alt} fluid={fluid} />
      </figure>
      <h3>
        <Link title={title} to={to}>
          {title} &rarr;
        </Link>
      </h3>
      <p className="mb-2">{description}</p>
      <h6>{date}</h6>
    </li>
  )
}
