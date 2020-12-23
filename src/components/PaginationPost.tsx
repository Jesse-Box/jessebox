/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

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
          <Styled.ul
            sx={{
              gridColumn: "2",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-between",
              listStyle: "none",
            }}
          >
            {children}
          </Styled.ul>
        </Grid>
      </nav>
    </section>
  )
}

export default PaginationPost
