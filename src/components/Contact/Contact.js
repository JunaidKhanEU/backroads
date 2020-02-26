import React from 'react'
import Title from '../Home/Title/Title'
import styles from '../../css/contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title='contact' subTitle='us' />
      <div className={styles.center}>
        <form
          className={styles.form} action='https://formspree.io/mbjyoavo'
          method='POST'
        >
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' className={styles.formControl} placeholder='John Smith' />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' className={styles.formControl} placeholder='email@email.com' />
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' className={styles.formControl} placeholder='message' />
          </div>
          <div>
            <input type='submit' value='submit' className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
