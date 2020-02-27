import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import StyledHero from '../components/Layout/StyledHero/StyledHero'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import Day from '../components/SingleDay/Day'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const TourTemplate = ({ data }) => {
  const { name, price, country, days, start, description: { description }, journey, images } = data.tour
  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {
              tourImages.map((item) => <Image key={item.id} fluid={item.fluid} alt='single tour' />)
            }
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              country {country}
            </p>
          </div>
          <h4>Starts on : {start}</h4>
          <h4>duration: {days}</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {
              journey.map((item, i) => <Day key={i} day={item.day} info={item.info} />)
            }
          </div>
          <AniLink fade to='/tours' className='btn-primary'>
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

// slug variable is automatically available inside below page query via page context which we send in gatsby-node.js as context
export const query = graphql`
query($slug:String!){ 
  tour: contentfulTour(slug:{eq:$slug}){
    name
    price
    country
    days
    start(formatString:"dddd MMMM Do, YYYY"),
    description{
      description
    }
    journey{
      day
      info
    }
    images{
      fluid{
        ...GatsbyContentfulFluid
      }
    }
  }
}
`
export default TourTemplate
