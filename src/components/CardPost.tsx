/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
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
    <article
      key={key}
      aria-label="Post Preview"
      sx={{
        p: [3, 4, 4],
        mb: [3, 4, 4],
        borderStyle: "solid",
        borderWidth: 0,
        borderColor: "muted",
        borderRadius: 2,
      }}
    >
      <header>
        <Styled.h6 aria-label="Published Date">{date}</Styled.h6>
        <Styled.h3 sx={{ pt: 2 }}>
          <Styled.a as={Link} title={title} aria-label="Post Link" to={to}>
            {title}
          </Styled.a>
        </Styled.h3>
      </header>
      <section>
        <Styled.p
          aria-label="Post Description"
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
        />

        <Container pt={3} pb={3}>
          <Container
            sx={{
              borderRadius: 2,
              borderStyle: "solid",
              borderWidth: 0,
              borderColor: "muted",
              overflow: "hidden",
            }}
          >
            <Image alt={alt} fluid={fluid} />
          </Container>
        </Container>
      </section>
    </article>
  )
}

export default CardPost
