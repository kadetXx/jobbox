import React, { ReactElement } from "react";
import styles from "./preloader.module.scss";

import Image from "next/image";

const Preloader = (): ReactElement => {
  return (
    <div className={styles.preloader} data-animation="preloader">
      <div
        className={styles.preloader_wrapper}
        data-animation="preloaderInner"
      ></div>
      <div className={styles.preloader_progress}>
        <p
          className={styles.preloader_percent}
          data-animation="preloader_percent"
        >
          0%
        </p>
      </div>
    </div>
  );
};

export default Preloader;
