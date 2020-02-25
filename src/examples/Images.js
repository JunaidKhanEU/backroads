import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../images/connectBcg.jpeg'
import Img from 'gatsby-image'

const getImages = graphql`
query{
  fixed: file(relativePath:{eq:"defaultBcg.jpeg"}){
    
    childImageSharp{
      fixed(width:300, height:400, grayscale:true){
       ...GatsbyImageSharpFixed
      }
    }
  }
  fluid:file(relativePath:{eq:"blogBcg.jpeg"}){
    
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
const Images = () => {
  const { fixed, fluid } = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} className='basic' alt='basic' />
      </article>
      <article>
        <h3>fixed blur Image</h3>
        <Img fixed={fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid svg image</h3>
        <Img fluid={fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem;
  article{
    border:3px solid red;
    padding: 1rem 0; 
  }
  .basic{
    width:100%;
  }
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
  }
`

export default Images
