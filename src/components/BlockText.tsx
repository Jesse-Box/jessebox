import React from "react"
import Grid from "./Grid"

interface Props {
  html: string
}

function BlockText({ html }: Props) {
  return (
    <section>
      <Grid>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Grid>
    </section>
  )
}

export default BlockText
