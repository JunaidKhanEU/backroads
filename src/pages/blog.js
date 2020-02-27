import React from 'react'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/Layout/StyledHero/StyledHero'
import BlogList from '../components/Blog/BlogList'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}>
        <h2>Blog Page!!</h2>
      </StyledHero>
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
query{
  blogBcg:file(relativePath:{eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:4160, quality:90){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
export default BlogPage
