/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

interface Props {
  key: string
  date: string
  title: string
  to: string
  description: string
  excerpt: string
  alt: string
  fluid: FluidObject
}

function CardPost(props: Props) {
  const { key, date, title, to, description, excerpt, alt, fluid } = props
  return (
    <li key={key}>
      <Image alt={alt} fluid={fluid} />
      <Styled.h5>
        <Styled.a as={Link} title={title} to={to} sx={{ display: "inline" }}>
          {title}
        </Styled.a>
        <span> — </span>
        <Styled.p
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
          sx={{ display: "inline" }}
        />
      </Styled.h5>
      <Styled.h5 sx={{ color: "secondary" }}>{date}</Styled.h5>
    </li>
  )
}

export default CardPost
