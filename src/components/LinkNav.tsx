import React from "react"
import { Link } from "gatsby"

interface Props {
  id?: string
  href?: string
  title: string
  ariaLabel?: string
  children: React.ReactNode
  to?: string
  activeClassName?: string
}

function LinkNav(props: Props) {
  const { id, href, title, ariaLabel, children, to, activeClassName } = props
  return (
    <Link
      as={Link}
      id={id}
      href={href}
      title={title}
      aria-label={ariaLabel}
      to={to}
      activeClassName={activeClassName}
    >
      {children}
    </Link>
  )
}

LinkNav.defaultProps = {
  activeClassName: "active",
}

export default LinkNav
