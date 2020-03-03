import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import StyledHero from '../components/Layout/StyledHero/StyledHero'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Seo from '../components/SEO/SEO'

const BlogTemplate = ({ data: { post } }) => {
  const { title, published, text: { json }, image } = post
  // this this the options to render images in your rich text contentful cms
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        return (
          <div className='rich'>
            <Seo title={title} />
            <h3>Awesome Image</h3>
            <img width='' src={node.data.target.fields.file['en-US'].url} alt='awesome' />
            <p>provided by John Doe</p>
          </div>
        )
      }
    }
  }
  return (
    <Layout>
      <StyledHero img={image.fluid} />
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at :{published}</h4>
          <article className={styles.post}>
            {
              documentToReactComponents(json, options)
            }
          </article>
          <AniLink fade to='/blog' className='btn-primary'>all posts</AniLink>
        </div>
      </section>
      single Blog Template
    </Layout>
  )
}

export const query = graphql`
query($slug:String!){
 post:contentfulPost(slug:{eq:$slug}){
  title
  slug
  published(formatString:"MMMM Do, YYYY")
  text{
    json
  }
  image{
    fluid{
      ...GatsbyContentfulFluid
    }
  }
}
}
`
export default BlogTemplate
