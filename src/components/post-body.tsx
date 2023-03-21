import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"

export default function PostBody({ content }) {
  return (
    <section className="post">
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          if (record.__typename === "DatoCmsVisual") {
            return <GatsbyImage image={record.image.gatsbyImageData} />
          }
          return (
            <>
              <p>Don't know how to render a block!</p>
              <pre>{JSON.stringify(record, null, 2)}</pre>
            </>
          )
        }}
      />
    </section>
  )
}
