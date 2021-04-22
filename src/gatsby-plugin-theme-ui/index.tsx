export default {
  breakpoints: ["40em", "56em", "64em"],

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  sizes: [540, 680, 720, 1200],

  radii: [2, 8, 16, 32, 99],

  fonts: {
    body:
      "Unica77LLWeb-Regular, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",
    heading:
      "Unica77LLWeb-Bold, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif",
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
    heading: 400,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },

  colors: {
    text: "#F9FAFB",
    background: "#101010",
    primary: {
      light: "#FF7E70",
      base: "#FF5447",
      dark: "#D93732",
    },
    accent: "#47A6FF",
    secondary: "#ADB9C2",
    muted: "#292929",
    modes: {
      light: {
        text: "#1A1F23",
        background: "#F9FAFB",
        primary: {
          light: "#8870FF",
          base: "#6047FF",
          dark: "#4332D9",
        },
        accent: "#CF1726",
        secondary: "#5F7181",
        muted: "#E7EBEE",
      },
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: ["16px", "20px", "24px"],
      m: 0,
      textRendering: "optimizelegibility",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 6,
      mt: 0,
      mb: [2, 2, 3],
      letterSpacing: "-0.64px",
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
      mt: 0,
      mb: [2, 2, 3],
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      mt: 0,
      mb: [2, 2, 3],
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
      margin: 0,
      pt: 2,
      pb: 0,
    },
    h5: {
      color: "text",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 2,
      mt: 0,
      mb: [3, 3, 4],
    },

    h6: {
      color: "secondary",
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 0,
      mt: 0,
      mb: [3, 3, 4],
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 1,
      mt: 0,
      mb: [3, 3, 4],
    },
    a: {
      color: "primary.base",
      margin: 0,
      transition: "all 80ms ease-in",
      outline: "none",
      borderRadius: 1,
      textDecoration: "none",

      ":hover": {
        textDecoration: "underline",
        textUnderlinePosition: "under",
      },

      ":active": {
        textDecoration: "underline",
        textUnderlinePosition: "under",
      },

      ":focus": {
        boxShadow: (theme) => `0 0 0 2px ${theme.colors.accent}`,
      },
    },
    ul: {
      mt: 0,
      mb: [3, 3, 4],
      px: 0,
    },
    pre: {
      fontFamily: "monospace",
      borderRadius: 2,
      fontSize: 1,
      my: 2,
      p: 3,
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      fontSize: 1,
      lineHeight: "body",
      fontFamily: "body",
      fontWeight: "body",
      pt: 2,
      pb: 2,
    },
    th: {
      px: 3,
      textAlign: "left",
      fontSize: "inherit",
      fontWeight: "inherit",
      borderTopStyle: "solid",
      borderBottomStyle: "solid",
      borderBottomWidth: 0,
      borderTopWidth: 0,
      borderTopColor: "muted",
      borderBottomColor: "muted",
      borderColor: "muted",
    },
    td: {
      px: 3,
      textAlign: "left",
      borderBottomStyle: "solid",
      borderBottomWidth: 0,
      borderBottomColor: "muted",
      color: "secondary",
    },
    img: {
      maxWidth: "100%",
    },
    blockquote: {
      my: 2,
      mx: 0,
      px: 3,
      borderLeftStyle: "solid",
      borderLeftColor: "primary.base",
      borderLeftWidth: 0,
      p: {
        color: "secondary",
      },
    },
  },

  buttons: {
    primary: {
      color: "background",
      bg: "primary.base",

      ":hover": {
        bg: "primary.light",
      },

      ":active": {
        bg: "primary.dark",
      },

      ":focus": {
        boxShadow: (theme) => `0 0 0 3px ${theme.colors.accent}`,
      },
    },
  },
}
