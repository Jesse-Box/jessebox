/** @jsx jsx */
import { jsx, Styled, Box, Container } from "theme-ui"
import PropTypes from "prop-types"
import Image from "gatsby-image"

const HeaderPost = props => {
  const { date, title, alt, fluid } = props

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

HeaderPost.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fluid: PropTypes.string.isRequired,
}

export default HeaderPost
