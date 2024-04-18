module.exports = {
  siteMetadata: {
    title: `Noah Michaels`,
    siteUrl: `https://noahmichaels.xyz`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Noah Michaels`,
        short_name: `Noah Michaels`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6463A5`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
