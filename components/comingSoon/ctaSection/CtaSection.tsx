import React from "react";
import styles from "./CtaSection.module.scss";
import { cfp } from '@/helpers'
import { Form, FloatingIcons } from "../index";

const CtaSection = () => {
  return (
    <div id={styles.cta}>
      <FloatingIcons />
      <h3 className={styles.cta_title}>Companies are hiring!</h3>
      <p className={styles.cta_subtitle} >Be the first to know when we launch!</p>

      <div className={styles.cta_form}>
        <Form btnText="Stay updated" btnType="secondary" inputClass="input__white" customClass={cfp(styles, ["form"])}  />
      </div>
    </div>
  );
};

export default CtaSection;
