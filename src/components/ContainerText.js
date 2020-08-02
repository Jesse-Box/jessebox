/** @jsx jsx */

import { jsx, Container } from "theme-ui"

const ContainerText = props => {
  const { children } = props
  return <Container sx={{ maxWidth: [0, 1, 2] }}>{children}</Container>
}

export default ContainerText
