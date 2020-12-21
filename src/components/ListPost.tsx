/** @jsx jsx */

import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

interface Props {
  to: string
  rel: string
  title: string
}

function ListPost(props: Props) {
  const { to, rel, title } = props
  return (
    <div
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
      }}
    >
      <Styled.h6
        sx={{
          textAlign: rel === "next" ? "right" : "left",
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
    </div>
  )
}

ListPost.defaultProps = {
  title: "title",
}

export default ListPost
