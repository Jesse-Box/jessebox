/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { jsx } from "theme-ui";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

function Avatar(Image) {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar-mii.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div sx={{ p: 2 }}>
      <Img
        sx={{
          width: [84, 100, 116],
          borderRadius: 0,
          borderStyle: "primary",
          borderWidth: 0,
          borderColor: "muted",
        }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  );
}

export default Avatar;