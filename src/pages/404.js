import React from 'react'
import Layout from '../components/Layout/Layout'
import styles from '../css/error.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Layout/Banner/Banner'
import Seo from '../components/SEO/SEO'

const ErrorPage = () => {
  return (
    <Layout>
      <Seo title='Error' />
      <header className={styles.error}>
        <Banner title='oops it`s a dead end'>
          <AniLink fade to='/' className='btn-white'>back to home page</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
