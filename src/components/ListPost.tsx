import React from "react"
import { Link } from "gatsby"

interface Props {
  to: string
  rel: string
  title: string
}

export default function ListPost(props: Props) {
  const { to, rel, title } = props
  return (
    <div
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
      }}
    >
      <h6
        sx={{
          textAlign: rel === "next" ? "right" : "left",
        }}
      >
        {rel}
      </h6>
      <Link
        title={title}
        aria-label={rel === "next" ? `Next Article` : `Previous Article`}
        as={Link}
        to={to}
        rel={rel}
      >
        {rel === "next" ? `${title} →` : `←${title}`}
      </Link>
    </div>
  )
}

ListPost.defaultProps = {
  title: "title",
}
