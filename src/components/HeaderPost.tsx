/** @jsx jsx */
import { jsx, Styled, Box, Container } from "theme-ui"
import Image, { FluidObject } from "gatsby-image"

interface Props {
  date: string
  title: string
  alt: string
  fluid: FluidObject
}

const HeaderPost: React.SFC<Props> = ({ date, title, alt, fluid }) => {
  return (
    <header aria-label="Post Header">
      <Box pt={2}>
        <Styled.h6 sx={{ py: 1 }}>{date}</Styled.h6>
        <Styled.h1>{title}</Styled.h1>
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
      </Box>
    </header>
  )
}

export default HeaderPost
