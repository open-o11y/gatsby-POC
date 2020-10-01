/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// const dotenv = require("dotenv").config()

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
        token: process.env.GH_API_KEY,
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
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `html`, `slug`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            html: node => node.internal.content,
            slug: node => node.fields.slug
          },
        },
      },
    },
  ],
}
