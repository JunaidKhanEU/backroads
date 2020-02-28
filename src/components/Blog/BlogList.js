import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Home/Title/Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'

const getPost = graphql`
{
  posts:allContentfulPost(sort:{fields:published, order: ASC}){
    edges{
      node{
        published(formatString:"MMMM Do, YYYY")
        title
        createdAt(formatString:"LLLL")
        slug
        id
        image{
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`
const BlogList = () => {
  const { posts } = useStaticQuery(getPost)
  return (
    <section className={styles.blog}>
      <Title title='our' subTitle='blogs' />
      <div className={styles.center}>
        {
          posts && posts.edges.map(({ node }) => <BlogCard key={node.id} blog={node} />)
        }
      </div>
    </section>
  )
}

export default BlogList
