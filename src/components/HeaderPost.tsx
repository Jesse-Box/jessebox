/** @jsx jsx */
import { Box, jsx, Styled } from "theme-ui"
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
      <Box mb={[2, 3, 4]} sx={{ gridColumn: "1/4" }}>
        <Image sx={{ mb: [2, 3, 4] }} alt={alt} fluid={fluid} />
        {caption ? <Styled.h6>{caption}</Styled.h6> : null}
      </Box>
      <Styled.h1 sx={{ gridColumn: "2" }}>{title}</Styled.h1>
      {description ? (
        <Styled.h5 sx={{ gridColumn: "2" }}>{description}</Styled.h5>
      ) : null}
      {date ? <Styled.h6 sx={{ gridColumn: "2" }}>{date}</Styled.h6> : null}
    </Grid>
  )
}

export default HeaderPost
