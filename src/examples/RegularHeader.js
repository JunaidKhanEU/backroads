import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

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
const RegularHeader = () => {
  return (
    <div>
      <StaticQuery
        query={getData} render={({ site }) => (
          <>
            <h1>title:{site.siteMetadata.title && site.siteMetadata.title} </h1>
            <h1>author: {site.siteMetadata.author && site.siteMetadata.author}</h1>
          </>
        )}
      />
      {/* <h1>title:{title && title} </h1>
      <h1>author: {author && author}</h1> */}
    </div>
  )
}

export default RegularHeader
