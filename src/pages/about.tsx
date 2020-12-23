/** @jsx jsx */
import { jsx, Styled, BaseStyles } from "theme-ui"
import { PageProps, graphql } from "gatsby"

import Grid from "../components/Grid"
import Layout from "../components/Layout"
import HeaderPost from "../components/HeaderPost"
import { FluidObject } from "gatsby-image"

interface Data {
  datoCmsAbout: {
    title: string
    avatar: {
      alt: string
      title: string
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
        <HeaderPost
          title={about.title}
          alt={about.avatar.alt}
          caption={about.avatar.title}
          fluid={about.avatar.fluid}
        />
        <Grid>
          <div sx={{ gridColumn: "2" }}>
            <BaseStyles>
              <Styled.div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsAbout.bodyNode.childMarkdownRemark.html,
                }}
                aria-label="About me"
                sx={{ p: 0 }}
              />
            </BaseStyles>
          </div>
        </Grid>
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
        title
      }
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
