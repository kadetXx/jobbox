import styles from "./Alert.module.scss";
import React from "react";


interface Props {
  icon: string | React.ReactNode;
  title: string;
  type: string;
  message: string | React.ReactNode;
  close: () => void;
  action?: {
    func: () => void;
    text: string
  }
}

const Alert = ({
  icon = "done",
  title = "Thanks!",
  type = "success",
  message = "Operation successful",
  close,
  action
}: Props) => {
  return (
    <div className={styles.alert}>
      <div className={styles.alert_box}>
        <button className={styles.alert_close} onClick={close}>
          <span className="material-icons"> clear </span>
        </button>
        <div className={styles.alert_icon}>
          <span className={`material-icons ${styles[type]}`}>{icon}</span>
        </div>
        <h2 className={styles.alert_title}>{title}</h2>
        <p className={styles.alert_message}>{message}</p>
        {action && (
          <button onClick={action.func} className={`btn white bg-secondary bd-secondary br-5 ${styles.alert_btn}`}>
            {action.text}
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
