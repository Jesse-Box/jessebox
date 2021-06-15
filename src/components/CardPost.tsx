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
    <li className="margin-bottom-2" key={key}>
      <figure className="margin-bottom-2">
        <Image alt={alt} fluid={fluid} />
      </figure>
      <h3>
        <Link title={title} to={to}>
          {title} &rarr;
        </Link>
      </h3>
      <p
        className="margin-bottom-2"
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
      <time>{date}</time>
    </li>
  )
}
