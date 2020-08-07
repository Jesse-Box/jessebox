/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
import PropTypes from "prop-types"

const PaginationPost = props => {
  const { children } = props
  return (
    <nav>
      <Box p={[3, 4, 4]}>
        <Styled.ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: 0,
            maxWidth: [0, 1, 2],
          }}
        >
          {children}
        </Styled.ul>
      </Box>
    </nav>
  )
}

PaginationPost.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PaginationPost
