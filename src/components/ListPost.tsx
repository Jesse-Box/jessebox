/** @jsx jsx */

import { jsx, Styled, Flex } from "theme-ui"
import { Link } from "gatsby"

interface Props {
  to: string
  rel: string
  title: string
}

function ListPost(props: Props) {
  const { to, rel, title } = props
  return (
    <Flex
      sx={{
        flexWrap: "nowrap",
        flexFlow: "column",
      }}
    >
      <Styled.h6
        sx={{
          textAlign: rel === "next" ? "right" : "left",
          textTransform: "capitalize",
        }}
      >
        {rel}
      </Styled.h6>
      <Styled.a
        sx={{ textAlign: rel === "next" ? "right" : "left" }}
        title={title}
        aria-label={rel === "next" ? `Next Article` : `Previous Article`}
        as={Link}
        to={to}
        rel={rel}
      >
        {rel === "next" ? `${title} →` : `←${title}`}
      </Styled.a>
    </Flex>
  )
}

ListPost.defaultProps = {
  title: "title",
}

export default ListPost
