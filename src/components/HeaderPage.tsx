import React from "react"
import { Link } from "gatsby"

interface Props {
  header: string
  subheader: string
  linkTo?: string
  linkLabel?: string
  className?: string
}

export default function HeaderPage(props: Props) {
  const { header, subheader, linkTo, linkLabel, className } = props
  return (
    <header>
      <h1>{header}</h1>
      <h5 className="fontFamily-text-serif">{subheader}</h5>
      {linkTo ? <Link to={linkTo}>{linkLabel}</Link> : null}
    </header>
  )
}
