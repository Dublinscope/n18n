module.exports = {
  siteMetadata: {
    siteUrl: 'https://headlessmultilingual.gatsbyjs.io',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: 'a9b93de7a56a6aa54c5c36cb6f9b99',
        /**
         * Example of how locale fallbacks should be set,
         * refer to README.md for more infos
         */
        localeFallbacks: {
          'lt-LT': 'en',
          'sv-FI': 'it',
        },
      },
    },
  ],
};
