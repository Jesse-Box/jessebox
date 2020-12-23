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
      <Image alt={alt} fluid={fluid} sx={{ mb: [3, 3, 4] }} />
      <Styled.h3>
        <Styled.a as={Link} title={title} to={to}>
          {title}
        </Styled.a>
      </Styled.h3>
      <Styled.p
        aria-label="Post Description"
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
      <Styled.p sx={{ color: "secondary" }}>{date}</Styled.p>
    </li>
  )
}

export default CardPost
