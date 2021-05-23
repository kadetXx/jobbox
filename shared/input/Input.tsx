import React, { useEffect, useState } from "react";

import styles from "./Input.module.scss";

import { cfp } from '@/helpers'
interface InputProps {
  type: string;
  placeholder: string;
  errors: any
  classNames?: string[];
  customClasses?: string;
  register: any
}

const Input = ({
  type,
  placeholder,
  errors,
  classNames,
  customClasses,
  register,
}: InputProps) => {
  const [pass, showPass] = useState<boolean>(false);

  const error = errors[register.name];

  return (
    <div className={`${styles.input} ${cfp(styles, classNames)} ${customClasses}`}>
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
      {error && <small className={styles.input_error} >Please fill this field correctly</small>}
    </div>
  );
};

export default Input;
