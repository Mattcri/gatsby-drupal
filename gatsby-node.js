/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query Articles {
      allNodeArticle {
        nodes {
          id
          path {
            alias
          }
        }
      }
    }
  `)

  result.data.allNodeArticle.nodes.forEach(article => {
    actions.createPage({
      path: article.path.alias,
      component: require.resolve('./src/templates/article.js'),
      context: {
        articleId: article.id
      }
    })
  })

}


