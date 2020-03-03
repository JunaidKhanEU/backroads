import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/blog.module.css'
import BlogCard from '../components/Blog/BlogCard'
import Title from '../components/Home/Title/Title'
import Seo from '../components/SEO/SEO'

const BlogTemplate = (props) => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props
  const isThisFirst = currentPage === 1
  const isThisLast = currentPage === numPages

  const nextPage = `/blogs/${currentPage + 1}`
  const prevPage = currentPage - 1 === 1 ? '/blogs' : `/blogs/${currentPage - 1}`

  return (
    <Layout>
      <Seo title='Blogs' />
      <section className={styles.blog}>
        <Title title='latest' subTitle='posts' />
        <div className={styles.center}>
          {
            data.posts.edges.map(({ node }) => (
              <BlogCard key={node.id} blog={node} />
            ))
          }
        </div>
        <section className={styles.links}>
          {
            !isThisFirst && (
              <AniLink fade to={prevPage} className={styles.link}>
                Prev
              </AniLink>
            )
          }

          {
            Array.from({ length: numPages }, (_, i) => {
              return (
                <AniLink key={i} fade to={`/blogs/${i === 0 ? '' : `${i + 1}`}`} className={i + 1 === currentPage ? `${styles.link} ${styles.active}` : `${styles.link}`}>
                  {i + 1}
                </AniLink>
              )
            })
          }

          {
            !isThisLast && (
              <AniLink fade to={nextPage} className={styles.link}>
            Next
              </AniLink>
            )
          }

        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
query($skip:Int!, $limit:Int!){
  posts: allContentfulPost(limit:$limit,skip:$skip, sort:{fields:createdAt,order:ASC}) {
    edges {
      node {
        slug
        title
        id
        published(formatString:"MMMM Do, YYYYY")
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
export default BlogTemplate
