import React from 'react'
import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner/Banner'
import { Link } from 'gatsby'
import About from '../components/Home/About/About'
import Services from '../components/Home/services/Services'
import SimpleHero from '../components/Layout/SimpleHero/SimpleHero'
export default () => (
  <Layout>
    <SimpleHero>
      <Banner title='continue exploring' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, provident?'>
        <Link to='/tours' className='btn-white'>explore tours</Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
