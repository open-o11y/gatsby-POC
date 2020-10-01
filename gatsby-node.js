const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  
  // console.log(`Node created of type "${node.internal.type}"`)

  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {
    // console.log(node.internal.type)
    // console.log(`\n`, fileNode.relativePath)
    // console.log(createFilePath({ node, getNode, basePath: `pages` }))
    
    const fileNode = getNode(node.parent)
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

} 

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {

    console.log(node.excerpt)

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}