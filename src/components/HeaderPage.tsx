/** @jsx jsx */
import { jsx, Container } from "theme-ui"

interface Props {
  children: React.ReactNode
}

function HeaderPage(props: Props) {
  const { children } = props
  return (
    <header aria-label="Post Header">
      <Container
        sx={{
          p: [3, 4, 4],
          borderStyle: "solid",
          borderWidth: 0,
          borderColor: "background",
          borderRadius: 2,
        }}
      >
        {children}
      </Container>
    </header>
  )
}
export default HeaderPage
