export default {
  colors: {
    text: "#F9FAFB",
    background: "#1A1F23",
    primary: "#FF6F47",
    secondary: "#ADB942",
    muted: "#343F46",
    modes: {
      text: "#1A1F23",
      background: "#F9FAFB",
      primary: "#CF172C",
      secondary: "#45525E",
      muted: "#DCE1E5",
    },
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],

  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },

  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  text: {
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: [2, 3],
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
    links: {
      inline: {
        fontWeight: "body",
        color: "primary",
      },
    },
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
}
