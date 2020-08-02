/** @jsx jsx */

import { jsx, Styled, Flex } from "theme-ui"
import { Link } from "gatsby"

const ListPost = props => {
  const { label, slug, rel, title } = props

  return (
    <Flex
      sx={{
        flexWrap: "nowrap",
        flexFlow: "column",
      }}
    >
      <Styled.h6 sx={{ textAlign: rel === "next" ? "right" : "left" }}>
        {label}
      </Styled.h6>
      <Styled.a
        sx={{ textAlign: rel === "next" ? "right" : "left" }}
        as={Link}
        to={slug}
        rel={rel}
      >
        `${rel === "next" ? "→" : "←"} ${title}`
      </Styled.a>
    </Flex>
  )
}

export default ListPost
