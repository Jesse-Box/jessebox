/** @jsx jsx */
import { jsx, Styled, Container, Box, BaseStyles } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"

interface Data {
  datoCmsBio: {
    avatar: {
      alt: string
      fixed: FixedObject
    }
    introNode: {
      childMarkdownRemark: {
        html: React.ReactNode
      }
    }
  }
}

function Bio() {
  const data: Data = useStaticQuery(graphql`
    query BioQuery {
      datoCmsBio {
        avatar {
          fixed(width: 60, height: 60) {
            ...GatsbyDatoCmsFixed
          }
          alt
        }
        introNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `)

  return (
    <Container
      p={[2, 3, 3]}
      sx={{
        borderStyle: "solid",
        borderWidth: 0,
        borderColor: "muted",
        borderRadius: 2,
      }}
    >
      <Box
        p={[0, 2, 2]}
        sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
      >
        <Box p={2} sx={{ display: "flex", flex: "0 0 76px", minWidth: 76 }}>
          <Image
            fixed={data.datoCmsBio.avatar.fixed}
            alt={data.datoCmsBio.avatar.alt}
            sx={{ minWidth: 60, borderRadius: 1 }}
          />
        </Box>
        <Container p={2} sx={{ flex: "1 1 300px" }}>
          <BaseStyles>
            <Styled.div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsBio.introNode.childMarkdownRemark.html,
              }}
              aria-label="About me"
              sx={{ p: 0 }}
            />
          </BaseStyles>
        </Container>
      </Box>
    </Container>
  )
}

export default Bio
