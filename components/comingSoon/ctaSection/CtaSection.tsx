import React from "react";
import styles from "./CtaSection.module.scss";

import { Form } from "../index";

const CtaSection = () => {
  return (
    <div id={styles.cta}>
      <h3 className={styles.cta_title}>Companies are hiring!</h3>
      <p className={styles.cta_subtitle} >Be the first to know when we launch!</p>

      <div className={styles.cta_form}>
        <Form btnText="Stay updated" btnType="secondary" btnWidth="28%" height="4" inputClass="input__white" />
      </div>
    </div>
  );
};

export default CtaSection;
