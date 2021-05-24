import React from "react";
import styles from "./MainSection.module.scss";

import { PictureStack } from "../index";

import { Badge } from "@/shared";
import { Form } from '@/components/comingSoon'

const MainSection = () => {
  return (
    <div id={styles.mainSection}>
      <div className={styles.imageContainer}>
        <PictureStack />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.badge}>
          <Badge type="secondary" title="Employers" />
        </div>
        <h2 className={styles.mainText}>
          Already credited <br /> employees for the <br /> position
        </h2>
        <p className={styles.subText}>
          We enlist and recommend applicants that meet your skill requirements.
          Check individual’s profile, contact, interview and hire.
        </p>
        <div className={styles.formContainer} >
          <Form btnType="primary" btnWidth="40%" btnText="Stay updated" />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
