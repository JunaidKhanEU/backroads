import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'

const BlogPage = () => {
  return (
    <Layout>
      Blog Page!!
      <Link to='/'>back home</Link>
    </Layout>
  )
}

export default BlogPage
