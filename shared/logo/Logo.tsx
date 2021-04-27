import React from 'react'
import styles from './logo.module.scss'

const logo = ({ title }: any) => {
  return (
    <div className={styles.logo} >
      <h1 className={styles.logo_text} > {title}</h1>
    </div>
  )
}

export default logo
