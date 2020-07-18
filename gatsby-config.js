module.exports = {
  siteMetadata: {
    title: `Jesse Box`,
    author: {
      name: `Jesse Box`,
      summary: `Senior product designer at EyeEm, formally at Hubrick & Dailymotion.`,
    },
    description: `My personal space for expressing thoughts on design related topics`,
    defaultThumb: ``,
    siteUrl: `https://www.jessebox.net/`,
    social: {
      twitter: `@JesseThomasBox`,
      linkedin: `jesse-box-835346b7`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 640,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jesse Box`,
        short_name: `Jesse Box`,
        start_url: `/`,
        background_color: `#101010`,
        theme_color: `#F9FAFB`,
        display: `minimal-ui`,
        icon: `content/assets/jessebox-logomark.png`,
        icons: [
          {
            src: `content/assets/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `content/assets/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `content/assets/favicons/apple-touch-icon.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `content/assets/favicons/apple-touch-icon-precomposed.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `content/assets/favicons/mstile-150x150.png`,
            sizes: `150x150`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
