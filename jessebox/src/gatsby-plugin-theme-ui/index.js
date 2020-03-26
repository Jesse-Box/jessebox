export default {
  breakpoints: ["40em", "56em", "64em"],

  space: [0, 4, 8, 12, 16, 20, 24, 28, 32],

  sizes: [656, 1260],

  radii: [8],

  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    heading:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    monospace: "Menlo, monospace",
  },

  fontSizes: [
    "0.833em",
    "1em",
    "1.2em",
    "1.44em",
    "1.728em",
    "2.074em",
    "2.488em",
  ],

  fontWeights: {
    body: 400,
    heading: 900,
    bold: 600,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

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

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: ["16px", "18px", "20px"],
      margin: 0,
      textRendering: "optimizelegibility",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 6,
      margin: 0,
      padding: 2,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
      margin: 0,
      padding: 2,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      margin: 0,
      padding: 2,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
      margin: 0,
      padding: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
      margin: 0,
      padding: 2,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
      margin: 0,
      padding: 2,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 1,
      margin: 0,
      padding: 2,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      margin: 0,
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
      margin: 0,
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
      margin: 0,
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },

  borderWidths: [2],

  borderStyles: {
    primary: "solid",
  },

  flexDirection: {
    horizontal: "row",
    vertical: "column",
  },

  justifyContent: {
    start: "flex-start",
    end: "flex-end",
    center: "center",
  },
}
