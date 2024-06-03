module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `Noah Michaels`,
    description: `Noah is a graphic designer from Raleigh, North Carolina.`,
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
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
        theme_color_in_head: false,
      },
    },
  ],
};
