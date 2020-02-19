import React from 'react'
import styles from '../../../css/footer.module.css'
import links from '../../../constants/links'
import socialLinks from '../../../constants/socialLinks'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, i) => <Link key={i} to={item.path}>{item.text}</Link>)}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, i) => <a key={i} href={item.url} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backroads travel company {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default Footer
