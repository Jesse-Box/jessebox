/** @jsx jsx */
import { Box, jsx, Styled } from "theme-ui"
import Image, { FluidObject } from "gatsby-image"

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
    <section>
      <Box my={[2, 3, 4]}>
        <Image alt={alt} fluid={fluid} />
      </Box>
      <Styled.h1>{title}</Styled.h1>
      <Styled.h5>{description}</Styled.h5>
      <Styled.h6>{date}</Styled.h6>
    </section>
  )
}

export default HeaderPost
