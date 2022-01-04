import React from "react";
import styles from "./preloader.module.scss";

import Image from "next/image";

const Preloader = () => {
  return (
    <div className={styles.preloader} data-animation="preloader">
      <div className={styles.preloader_wrapper} data-animation="preloaderInner">
        <div className={styles.preloader_quote}>
          <p className={styles.preloader_quoteText}>
            “Choose a job you love, and you will never have to work a day in
            your life”
            <br />
            <span className={styles.preloader_quoteAuthor}>- Confucious</span>
          </p>
        </div>
        <div className={styles.preloader_progress}>
          <p
            className={styles.preloader_percent}
            data-animation="preloaderPercent"
          >
            0%
          </p>
          <span className={styles.preloader_dash}></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
