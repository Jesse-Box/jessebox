import React from "react"

interface Props {
  variant?: string
  ariaLabel: string
  id?: string
  title?: string
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: Props) {
  const { ariaLabel, id, title, children, onClick } = props
  return (
    <button id={id} title={title} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  )
}
