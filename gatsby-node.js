const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query{
  tours:allContentfulTour{
    edges{
      node{
        slug
      }
    }
  }
  posts:allContentfulPost{
    edges{
      node{
        slug
      }
    }
  }
}
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve('./src/templates/tour-template.js'),
      context: { slug: node.slug } // this context is availble inside template page query as variable
    })
  })
  // create pages for posts
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve('./src/templates/blog-template.js'),
      context: { slug: node.slug } // this context is availble inside template page query as variable
    })
  })

  // amount of post
  const posts = data.posts.edges
  // posts per page 2 , this is limit basically
  const postsPerPage = 1
  // how many page
  const numPages = Math.ceil(posts.length / postsPerPage)

  // array created with lenght given
  const pages = Array.from({ length: numPages })
  pages.forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blogs' : `/blogs/${i + 1}`,
      component: path.resolve('./src/templates/blogs-template.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPages,
        currentPage: i + 1
      }
    })
  })
}
