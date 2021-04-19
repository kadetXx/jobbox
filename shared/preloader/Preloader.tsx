import React from 'react'
import styles from "./preloader.module.scss"

import Image from "next/image"

const Preloader = () => {
  return (
    <div className={styles.preloader} >
      <Image src="/svg/preloader.svg" width="200px" height="200px" />
    </div>
  )
}

export default Preloader
