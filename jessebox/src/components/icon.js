/** @jsx jsx */
import { jsx } from "theme-ui"

const IconMap = {
  twitter: Twitter,
  linkedIn: LinkedIn,
  mail: Mail,
}

function Icon(props) {
  const { name, color, size = 24, ...rest } = props
  const Drawing = IconMap[name] ? IconMap[name] : null

  return (
    <svg
      width={size}
      height={size}
      {...rest}
      viewBox="0 0 24 24"
      strokeWidth="2px"
      sx={{ stroke: "primary" }}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Drawing stroke={color} />
    </svg>
  )
}

function Twitter(props) {
  return (
    <path
      fill={props.fill}
      stroke-width={props.strokeWidth}
      stroke={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
      d="M 23 3 C 22.042 3.675 20.982 4.192 19.86 4.53 C 18.626 3.112 16.638 2.614 14.882 3.284 C 13.126 3.955 11.975 5.65 12 7.53 L 12 8.53 C 8.431 8.623 5.052 6.922 3 4 C 3 4 -1 13 8 17 C 5.941 18.398 3.487 19.099 1 19 C 10 24 21 19 21 7.5 C 20.999 7.221 20.972 6.944 20.92 6.67 C 21.941 5.663 22.661 4.393 23 3 Z"
    ></path>
  )
}

function LinkedIn(props) {
  return (
    <g>
      <path
        fill={props.fill}
        stroke-width={props.strokeWidth}
        stroke={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
        d="M 16 8 C 19.314 8 22 10.686 22 14 L 22 21 L 18 21 L 18 14 C 18 12.895 17.105 12 16 12 C 14.895 12 14 12.895 14 14 L 14 21 L 10 21 L 10 14 C 10 10.686 12.686 8 16 8 Z M 2 9 L 6 9 L 6 21 L 2 21 Z"
      ></path>
      <path
        fill={props.fill}
        stroke-width={props.strokeWidth}
        stroke={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
        d="M 2 4 C 2 2.895 2.895 2 4 2 C 5.105 2 6 2.895 6 4 C 6 5.105 5.105 6 4 6 C 2.895 6 2 5.105 2 4 Z"
      ></path>
    </g>
  )
}

function Mail(props) {
  return (
    <g>
      <path
        fill={props.fill}
        stroke-width={props.strokeWidth}
        stroke={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      ></path>
      <path
        fill={props.fill}
        stroke-width={props.strokeWidth}
        stroke={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
        d="M22 6l-10 7L2 6"
      ></path>
    </g>
  )
}

export default Icon
