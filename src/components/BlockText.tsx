import React from "react"

interface Props {
  html: string
}

export default function BlockText({ html }: Props) {
  return (
    <section
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></section>
  )
}
