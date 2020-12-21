/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Image, { FluidObject } from "gatsby-image"

interface Props {
  date: string
  title: string
  alt: string
  fluid: FluidObject
}

function HeaderPost(props: Props) {
  const { date, title, alt, fluid } = props
  return (
    <section>
      <Image alt={alt} fluid={fluid} />
      <Styled.h1>{title}</Styled.h1>
      <Styled.h6>{date}</Styled.h6>
    </section>
  )
}

export default HeaderPost
