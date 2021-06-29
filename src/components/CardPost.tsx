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
    <li className="post-item" key={key}>
      <figure className="post-item__thumb">
        <Image alt={alt} fluid={fluid} />
      </figure>
      <article>
        <h3>
          <Link title={title} to={to}>
            {title}
          </Link>
        </h3>
        <p className="post-item__description">{description}</p>
        <h6>{date}</h6>
      </article>
    </li>
  )
}
