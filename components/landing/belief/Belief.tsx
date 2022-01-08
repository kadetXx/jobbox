import React from "react";
import styles from "./Belief.module.scss";

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

      <div className={styles.belief_images} data-animation="beliefImg">
        <figure>
          <img src="/svg/home-job-card.svg" />
        </figure>

        <div className={styles.belief_floaters}>
          <div className={styles.belief_imageFloat} data-animation="beliefBtn">
            <figure>
              <img src="/svg/home-jc-reject.svg" />
            </figure>
          </div>
          <div className={styles.belief_imageFloat} data-animation="beliefBtn">
            <figure>
              <img src="/svg/home-jc-review.svg" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Belief;
