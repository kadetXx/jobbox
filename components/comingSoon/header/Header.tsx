import React from 'react'
import styles from './Header.module.scss'

import { Logo } from '@/shared'

const Header = () => {
  return (
    <div id={styles.header}>
      <Logo width="154.8px" height="37.2px" />
      <button className={`btn bg-transparent bd-secondary secondary br-5 ${styles.header_btn}`}>Stay Updated</button>
    </div>
  )
}

export default Header
