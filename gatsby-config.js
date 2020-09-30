/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Panda Eats`
  },
  pathPrefix: "/gatsby-POC",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    'gatsby-plugin-antd',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        // token: "0922cfabc6468392005ad57a77bcf5595fbc659a",
        token: process.env.GATSBY_GITHUB_TOKEN,
        variables: {},
        graphQLQuery: `
          query {
            repository(owner: "open-o11y", name: "opentelemetry-js") {
              collaborators {
                nodes {
                  name
                  avatarUrl
                }
              }
            }
          }
        `
      },
    },
  ],
}
