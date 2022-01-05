import React from "react";
import styles from "./Belief.module.scss";

import Image from "next/image";

const Belief = () => {
  return (
    <div className={styles.belief}>
      <h2 className={styles.belief_title}>
        We believe traditional job boards are broken.
      </h2>

      <p className={styles.belief_description}>
        We created Jobbox to fix them, connecting job seekers and recruiters in
        a community experience that's designed to help both parties get what
        they want!
      </p>

      <div className={styles.belief_images}>
        <Image src="/svg/home-job-card.svg" layout="fill" />

        <div className={styles.belief_floaters} >
          <div className={styles.belief_imageFloat}>
            <Image src="/svg/home-jc-reject.svg" layout="fill" />
          </div>
          <div className={styles.belief_imageFloat}>
            <Image src="/svg/home-jc-review.svg" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belief;
