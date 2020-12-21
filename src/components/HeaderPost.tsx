/** @jsx jsx */
import { jsx, Styled, Box, Container } from "theme-ui"
import Image, { FluidObject } from "gatsby-image"

interface Props {
  date: string
  title: string
  alt: string
  fluid: FluidObject
}

function HeaderPost(props: Props) {
  const { date, title, alt, fluid } = props
  return (
    <header aria-label="Post Header">
      <Box pt={2}>
        <Container py={3} sx={{ maxWidth: 3 }}>
          <Box
            sx={{
              borderRadius: 2,
              borderStyle: "solid",
              borderWidth: 0,
              borderColor: "muted",
              overflow: "hidden",
            }}
          >
            <Image alt={alt} fluid={fluid}></Image>
          </Box>
        </Container>
        <Styled.h1>{title}</Styled.h1>
        <Styled.h6 sx={{ py: 1 }}>{date}</Styled.h6>
      </Box>
    </header>
  )
}

export default HeaderPost
