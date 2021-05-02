import React, { useState } from "react";

import styles from "./Input.module.scss";

const Input = ({
  type,
  placeholder,
  errors,
  className = "input",
  register,
}: any) => {
  const [pass, showPass] = useState<boolean>(false);

  const error = errors[register.name];

  return (
    <div className={`${styles[className]}`}>
      <input
        type={type !== "password" ? type : pass ? "text" : "password" }
        placeholder={placeholder}
        className={styles.input_field}
        {...register}
      />
      {type === "password" && (
        <span className={`material-icons-outlined ${styles.input_toggleIcon}`} onClick={() => showPass(!pass)} >
          {pass ? "visibility" : "visibility_off"}{" "}
        </span>
      )}
      {error && <small>Please fill this field correctly</small>}
    </div>
  );
};

export default Input;
