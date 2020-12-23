/** @jsx jsx */
import { Box, jsx, Styled } from "theme-ui"
import Image, { FluidObject } from "gatsby-image"

import Grid from "./Grid"

interface Props {
  date: string
  title: string
  description: string
  alt: string
  fluid: FluidObject
}

function HeaderPost(props: Props) {
  const { date, title, description, alt, fluid } = props
  return (
    <Grid>
      <Image
        alt={alt}
        fluid={fluid}
        sx={{ gridColumn: " 1/4", my: [2, 3, 4] }}
      />
      <Styled.h1 sx={{ gridColumn: "2" }}>{title}</Styled.h1>
      <Styled.h5 sx={{ gridColumn: "2" }}>{description}</Styled.h5>
      <Styled.h6 sx={{ gridColumn: "2" }}>{date}</Styled.h6>
    </Grid>
  )
}

export default HeaderPost
