import React from "react"

import Grid from "./Grid"

interface Props {
  children: React.ReactNode
}

export default function PaginationPost(props: Props) {
  const { children } = props
  return (
    <section>
      <nav>
        <Grid>
          <ul>{children}</ul>
        </Grid>
      </nav>
    </section>
  )
}
