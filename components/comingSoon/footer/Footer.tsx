import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <p className={styles.footer_text} >Copyright &#169; 2021 Jobbox Limited. All rights reserved.</p>
    </footer>
  )
}

export default Footer
