/** @jsx jsx */

import { jsx, Styled, Box } from "theme-ui"

const PaginationPost = props => {
  const { children } = props
  return (
    <nav>
      <Box py={2}>
        <Styled.ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
            margin: 0,
          }}
        >
          {children}
        </Styled.ul>
      </Box>
    </nav>
  )
}

export default PaginationPost
