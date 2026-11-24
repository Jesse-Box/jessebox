import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

const noindexPages = ["/retired/", "/404/"]

export default defineConfig({
  site: "https://www.jessebox.net",
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !noindexPages.some((path) => new URL(page).pathname === path),
    }),
  ],
  fonts: [
    {
      provider: fontProviders.local(),
      name: "GT Flexa Expanded",
      cssVariable: "--font-gt-flexa-expanded",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/GT-Flexa-Expanded-Bold.woff2"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "GT Flexa",
      cssVariable: "--font-gt-flexa",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/GT-Flexa-Standard-Regular.woff2"],
            weight: 400,
            style: "normal",
          },
        ],
      },
    },
  ],
})
