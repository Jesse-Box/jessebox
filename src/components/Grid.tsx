/** @jsx jsx */

import { jsx } from "theme-ui"

interface Props {
  children: React.ReactNode
}

function Grid({ children }: Props) {
  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr min(720px, 100%) 1fr",
        px: [3, 4, 5],
      }}
    >
      {children}
    </section>
  )
}

export default Grid
