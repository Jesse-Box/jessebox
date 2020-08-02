/** @jsx jsx */

import { jsx, Box, Container } from "theme-ui"

const FrameImage = props => {
  const { children } = props

  return (
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
        {children}
      </Box>
    </Container>
  )
}

export default FrameImage
