/** @jsx jsx */
import { jsx, Styled, BaseStyles } from "theme-ui"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/Layout"
import HeaderPost from "../components/HeaderPost"

interface Data {
  datoCmsAbout: {
    title: string
    avatar: {
      alt: string
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
          fluid={about.avatar.fluid}
        />
        <BaseStyles>
          <Styled.div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsAbout.bodyNode.childMarkdownRemark.html,
            }}
            aria-label="About me"
            sx={{ p: 0 }}
          />
        </BaseStyles>
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
