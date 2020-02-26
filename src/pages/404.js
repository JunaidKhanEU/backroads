import React from 'react'
import Layout from '../components/Layout/Layout'
import styles from '../css/error.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Banner from '../components/Layout/Banner/Banner'

const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title='oops it`s a dead end'>
          <AniLink fade to='/' className='btn-white'>back to home page</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
