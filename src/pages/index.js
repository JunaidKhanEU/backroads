import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Layout/Banner/Banner'
import { graphql } from 'gatsby'
import About from '../components/Home/About/About'
import Services from '../components/Home/services/Services'
import StyledHero from '../components/Layout/StyledHero/StyledHero'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default ({ data }) => (
  <Layout>
    <StyledHero home img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title='continue exploring' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident?'>
        <AniLink to='/tours' className='btn-white'>explore tours</AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
)

export const query = graphql`
query{
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:4160, quality:90){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
