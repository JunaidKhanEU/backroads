import React from 'react'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'
import StyledHero from '../components/Layout/StyledHero/StyledHero'
import Contact from '../components/Contact/Contact'

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.childImageSharp.fluid}>

      contact Page
      </StyledHero>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
query{
  connectBcg:file(relativePath:{eq:"connectBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:4160, quality:90){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default contact
