/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

interface Props {
  children: React.ReactNode
}

function PaginationPost(props: Props) {
  const { children } = props
  return (
    <section>
      <nav>
        <Styled.ul
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          {children}
        </Styled.ul>
      </nav>
    </section>
  )
}

export default PaginationPost
