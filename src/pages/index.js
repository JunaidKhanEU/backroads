import React from 'react'
import Layout from '../components/Layout/Layout'
import SimpleHero from '../components/SimpleHero/SimpleHero'
import Banner from '../components/Banner/Banner'
import { Link } from 'gatsby'
export default () => (
  <Layout>
    Hello from backRoads

    <SimpleHero>
      <Banner title='continue exploring' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident?'>
        <Link to='/tours' className='btn-white'>explore tours</Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
