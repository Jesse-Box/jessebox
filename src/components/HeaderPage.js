/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import PropTypes from "prop-types"

const HeaderPage = props => {
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

HeaderPage.propTypes = {
  children: PropTypes.element.isRequired,
}

export default HeaderPage
