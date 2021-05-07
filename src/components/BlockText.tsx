import React from "react"
import Grid from "./Grid"

interface Props {
  html: string
}

export default function BlockText({ html }: Props) {
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
