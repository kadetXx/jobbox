import styles from "./Alert.module.scss";
import React from "react";

const Alert = ({
  icon = "done",
  title = "Thanks!",
  type = "success",
  message = "Operation successful",
  close
}) => {
  return (
    <div className={styles.alert}>
      <div className={styles.alert_box}>
        <button className={styles.alert_close} onClick={close}>
          <span className="material-icons"> cancel </span>
        </button>
        <div className={styles.alert_icon}>
          <span className={`material-icons ${styles[type]}`}>{icon}</span>
        </div>
        <h2 className={styles.alert_title}>{title}</h2>
        <p className={styles.alert_message}>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
