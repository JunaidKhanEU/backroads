import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from '../Title/Title'
import styles from '../../../css/about.module.css'

const getImage = graphql`
query{
  aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
const About = () => {
  const { aboutImage } = useStaticQuery(getImage)

  return (
    <section className={styles.about}>
      <Title title='about' subTitle='us' />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <Img fluid={aboutImage.childImageSharp.fluid} alt='about picture' />
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur modi magni sunt!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ratione nemo quidem?</p>
          <button type='button' className='btn-primary'>read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
