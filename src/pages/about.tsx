/** @jsx jsx */
import { jsx, Styled, Container, BaseStyles } from "theme-ui"
import { PageProps, graphql } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import Layout from "../components/Layout"

interface Data {
  datoCmsAbout: {
    title: string
    avatar: {
      alt: string
      fluid: FluidObject
    }
    bodyNode: {
      childMarkdownRemark: {
        html: React.ReactNode
      }
    }
  }
}

function About({ data }: PageProps<Data>) {
  const about = data.datoCmsAbout

  return (
    <Layout>
      <article>
        <Container
          sx={{
            p: [3, 4, 4],
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: "background",
            borderRadius: 2,
          }}
        >
          <Styled.h1>{about.title}</Styled.h1>
          <Image alt={about.avatar.alt} fluid={about.avatar.fluid} />
          <BaseStyles>
            <Styled.div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAbout.bodyNode.childMarkdownRemark.html,
              }}
              aria-label="About me"
              sx={{ p: 0 }}
            />
          </BaseStyles>
        </Container>
      </article>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    datoCmsAbout {
      title
      avatar {
        alt
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
