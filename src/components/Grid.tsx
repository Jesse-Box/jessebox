import React from "react"

interface Props {
  children: React.ReactNode
}

export default function Grid({ children }: Props) {
  return <section>{children}</section>
}
