import React from "react"

interface Props {
  children: React.ReactNode
}

function Grid({ children }: Props) {
  return <section>{children}</section>
}

export default Grid
