module.exports = {
  siteMetadata: {
    title: `Starter Blog`,
    author: `Rachelle Rathbone`,
    description: `A blog that shows you the awesome power of gatsby.`,
    social: {
      twitter: `coding_love`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      // We need this plugin in order to make gatsby a PWA. It allows users to add the site to the homescreen on most web browsers
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Starter Blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `content/assets/cheese-icon.png`,
      },
    },
    {
      // This plugin tells your app where to find your typography.js file
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // We need this plugin in order to make gatsby a PWA
    //  This makes gatsby resistant to bad networks connections and makes it possible for gatsby apps to work offline, it's recommended to use along with the "gatsby-plugin-manifest" and set it up in the gatsby-config.js file somewhere below the manifest plugin.
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
