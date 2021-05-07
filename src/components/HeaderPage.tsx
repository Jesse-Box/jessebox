import React from "react"

interface Props {
  children: React.ReactNode
}

export default function HeaderPage(props: Props) {
  const { children } = props
  return (
    <header aria-label="Post Header">
      <section>{children}</section>
    </header>
  )
}
