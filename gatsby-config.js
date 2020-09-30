/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
        token: '7370bdd5d95b2c9414a5bf04581fd8a066c36b4c',
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
