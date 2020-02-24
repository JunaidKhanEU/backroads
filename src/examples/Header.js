import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  query{
  site{
    siteMetadata{
      title
      author
    }
  }
}
  `
const Header = (props) => {
  const { site: { siteMetadata: { title, author } } } = useStaticQuery(getData)
  return (
    <div>
      <h1>title:{title && title} </h1>
      <h1>author: {author && author}</h1>
    </div>
  )
}

export default Header
