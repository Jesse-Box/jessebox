/** @jsx jsx */
import { jsx, Styled, Container, Box } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Image, { FixedObject } from "gatsby-image"

type Data = {
  avatar: {
    childImageSharp: {
      fixed: FixedObject
    }
    site: {
      siteMetadata: {
        author: {
          name: string
          summary: string
        }
        social: {
          twitter: string
          linkedin: string
        }
      }
    }
  }
}

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
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
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            sx={{ minWidth: 60, borderRadius: 1 }}
          />
        </Box>
        <Container p={2} sx={{ flex: "1 1 300px" }}>
          <Styled.p aria-label="About me" sx={{ p: 0 }}>
            {author.summary}
            {` `} Find me on {` `}
            <Styled.a
              title="Twitter Profile"
              aria-label="Twitter Profile"
              href={`https://twitter.com/${social.twitter}`}
            >
              Twitter
            </Styled.a>
            {` `}
            or
            {` `}
            <Styled.a
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
              href={`https://linkedin.com/in/${social.linkedin}`}
            >
              LinkedIn
            </Styled.a>
            .
          </Styled.p>
        </Container>
      </Box>
    </Container>
  )
}

export default Bio
