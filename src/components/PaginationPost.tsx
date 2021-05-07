import React from "react"

import Grid from "./Grid"

interface Props {
  children: React.ReactNode
}

function PaginationPost(props: Props) {
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

export default PaginationPost
