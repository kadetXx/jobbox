import React from "react";
import styles from "./AuthForms.module.scss";

const VerifyEmailForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.form_header}>
        <h3 className={styles.form_title}> You've got mail 📩 </h3>
        <p className={styles.form_subtitle}>Sign in to your Jobbox account</p>
      </div>
    </div>
  );
};

export default VerifyEmailForm;
