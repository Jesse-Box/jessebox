/** @jsx jsx */
import { jsx } from "theme-ui"

const IconMap = {
  twitter: Twitter,
  linkedIn: LinkedIn,
}

function Icon(props) {
  const { name, size = 24, ...rest } = props
  const Drawing = IconMap[name] ? IconMap[name] : null

  return (
    <svg
      width={size}
      height={size}
      {...rest}
      viewBox="0 0 24 24"
      strokeWidth="2px"
      sx={{
        fill: "primary",
      }}
    >
      <Drawing />
    </svg>
  )
}

function Twitter(props) {
  return (
    <path
      fill={props.fill}
      d="M 8.104 20.501 C 16.029 20.501 20.363 13.96 20.363 8.288 C 20.363 8.102 20.363 7.917 20.35 7.733 C 21.194 7.126 21.922 6.373 22.5 5.511 C 21.714 5.858 20.879 6.086 20.025 6.187 C 20.925 5.65 21.598 4.806 21.92 3.812 C 21.074 4.312 20.149 4.665 19.184 4.854 C 17.848 3.44 15.726 3.093 14.007 4.01 C 12.288 4.926 11.4 6.877 11.841 8.769 C 8.377 8.596 5.149 6.966 2.962 4.284 C 1.818 6.246 2.402 8.755 4.296 10.014 C 3.61 9.994 2.939 9.81 2.34 9.477 L 2.34 9.532 C 2.341 11.575 3.786 13.335 5.797 13.739 C 5.162 13.912 4.497 13.937 3.851 13.813 C 4.416 15.562 6.033 16.759 7.876 16.794 C 6.351 17.988 4.466 18.637 2.526 18.635 C 2.183 18.634 1.84 18.614 1.5 18.573 C 3.47 19.833 5.763 20.501 8.104 20.498"
    ></path>
  )
}

function LinkedIn(props) {
  return (
    <path
      fill={props.fill}
      d="M 20.968 4.267 L 20.968 19.671 C 20.968 20.387 20.37 20.97 19.636 20.97 L 4.296 20.97 C 3.563 20.97 2.968 20.387 2.968 19.671 L 2.968 4.267 C 2.968 3.551 3.563 2.97 4.296 2.97 L 19.636 2.97 C 20.37 2.97 20.968 3.551 20.968 4.267 Z M 5.636 18.308 L 8.309 18.308 L 8.309 9.718 L 5.636 9.718 Z M 6.972 5.448 C 6.114 5.448 5.424 6.141 5.424 6.996 C 5.424 7.85 6.116 8.545 6.972 8.545 C 7.826 8.545 8.519 7.85 8.519 6.996 C 8.519 6.142 7.826 5.448 6.972 5.448 Z M 9.985 9.718 L 9.985 18.308 L 12.652 18.308 L 12.652 14.06 C 12.652 12.939 12.864 11.853 14.253 11.853 C 15.622 11.853 15.64 13.134 15.64 14.13 L 15.64 18.308 L 18.308 18.308 L 18.308 13.597 C 18.308 11.283 17.808 9.505 15.105 9.505 C 13.806 9.505 12.934 10.217 12.579 10.892 L 12.542 10.892 L 12.542 9.718 Z"
    ></path>
  )
}

export default Icon
