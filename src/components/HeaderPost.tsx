import React from "react"
import Image, { FluidObject } from "gatsby-image"

import Grid from "./Grid"

interface Props {
  date?: string
  title: string
  description?: string
  alt: string
  caption?: string
  fluid: FluidObject
}

function HeaderPost(props: Props) {
  const { date, title, description, alt, caption, fluid } = props
  return (
    <Grid>
      <div>
        <Image alt={alt} fluid={fluid} />
        {caption ? <h6>{caption}</h6> : null}
      </div>
      <h1>{title}</h1>
      {description ? <h5>{description}</h5> : null}
      {date ? <h6>{date}</h6> : null}
    </Grid>
  )
}

export default HeaderPost
