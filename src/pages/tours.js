import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import StyledHero from '../components/Layout/StyledHero/StyledHero'
class TourPage extends Component {
  render () {
    return (
      <Layout className={this.props.className}>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}>

        TourPage!!
        </StyledHero>

      </Layout>
    )
  }
}

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

export default styled(TourPage)`

`
