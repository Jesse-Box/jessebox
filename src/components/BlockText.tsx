/** @jsx jsx */
import { jsx, BaseStyles } from "theme-ui"

import Grid from "./Grid"

interface Props {
  html: string
}

function BlockText({ html }: Props) {
  return (
    <section>
      <BaseStyles>
        <Grid>
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
            sx={{ gridColumn: "2", mb: [3, 4, 5] }}
          />
        </Grid>
      </BaseStyles>
    </section>
  )
}

export default BlockText
