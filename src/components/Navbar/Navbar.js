import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from '../../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../../constants/links'
import socialLinks from '../../constants/socialLinks'
import logo from '../../images/logo.svg'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav((PrevIsOpen) => !PrevIsOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt='backroads-logo' />
          <button type='button' className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
          {
            links.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              )
            })
          }
        </ul>
        <div className={styles.navSocialLinks}>
          {
            socialLinks.map((item, i) => {
              return (
                <a href={item.url} key={i} target='_blank' rel='noopener noreferrer'>
                  {item.icon}
                </a>
              )
            })
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
