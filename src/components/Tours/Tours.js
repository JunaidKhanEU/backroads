import React from 'react'
import TourList from './TourList'
import { graphql, useStaticQuery } from 'gatsby'

const getTours = graphql`
{
  tours:allContentfulTour{
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
const Tours = () => {
  const { tours: { edges } } = useStaticQuery(getTours)

  return (
    <div>
      <TourList tours={edges || []} />
    </div>
  )
}

export default Tours
