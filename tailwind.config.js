module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
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
    fontSize: {
      xs: ["0.694rem", { lineHeight: "1.5rem" }],
      sm: ["0.833rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.2rem", { lineHeight: "1.5rem" }],
      xl: ["1.44rem", { lineHeight: "1.25rem" }],
      "2xl": ["1.728rem", { lineHeight: "1.25rem" }],
      "3xl": ["1.875rem", { lineHeight: "1.25rem" }],
      "4xl": ["2.074rem", { lineHeight: "1.25rem" }],
      "5xl": ["2.488rem", { lineHeight: "1,25rem" }],
      "6xl": ["2.986rem", { lineHeight: "1" }],
      "7xl": ["3.583rem", { lineHeight: "1" }],
      "8xl": ["4.3rem", { lineHeight: "1" }],
      "9xl": ["5.16em", { lineHeight: "1" }],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
