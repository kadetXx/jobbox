import React from 'react'
import styles from './AuthLayout.module.scss'

import { Logo } from '@/shared'

const AuthLayout = ({ children }) => {
  return (
    <div id={styles.authLayout} >
      <aside className={styles.sideBanner} >
        <Logo />
      </aside>

      <main className={styles.main} >
        {children}
      </main>
    </div> 
  )
}

export default AuthLayout 