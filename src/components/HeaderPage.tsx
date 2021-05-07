import React from "react"

interface Props {
  children: React.ReactNode
}

function HeaderPage(props: Props) {
  const { children } = props
  return (
    <header aria-label="Post Header">
      <section>{children}</section>
    </header>
  )
}
export default HeaderPage
