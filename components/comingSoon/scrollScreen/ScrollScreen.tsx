import React from "react";

import styles from "./ScrollScreen.module.scss";

import { JobExhibitCard } from "@/shared";

const ScrollScreen = () => {
  return (
    <div id={styles.scrollScreen}>
      <div className={styles.scroller}>
        <JobExhibitCard
          title="Senior Product Designer"
          company="BBC News"
          image="/svg/bbc.svg"
          jobType="Full time"
          location="Remote"
        />
      </div>
    </div>
  );
};

export default ScrollScreen;
