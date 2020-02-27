import React from 'react'
import Tour from '../../Tours/Tour'
import { graphql, useStaticQuery } from 'gatsby'
import Title from '../Title/Title'
import styles from '../../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getFeaturedTour = graphql`
{
  featuredTours:allContentfulTour(filter:{featured:{eq:true}}){
    totalCount
    edges{
      node{
        id
        slug
        name
        price
        country
        featured
        days
        journey{
          day
          info
        }
        description {
          id
        }
        images{
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`
const FeaturedTour = () => {
  const { featuredTours } = useStaticQuery(getFeaturedTour)
  const tours = featuredTours.edges
  return (
    <section className={styles.tours}>
      <Title title='featured' subTitle='tours' />
      <div className={styles.center}>
        {
          tours.map(({ node }) => {
            return <Tour key={node.id} tour={node} />
          })
        }
      </div>
      <AniLink fade to='/tours' className='btn-primary'>
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTour
