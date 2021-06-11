import React, { useEffect, useState } from "react";

import styles from "./Input.module.scss";

import { cfp } from "@/helpers";
interface InputProps {
  type: string;
  height?: string | number;
  placeholder: string;
  errors: any;
  classNames?: string[];
  customClasses?: string;
  register: any;
}

const Input = ({
  type,
  height = "4.5",
  placeholder,
  errors,
  classNames,
  customClasses,
  register,
}: InputProps) => {
  const [pass, showPass] = useState<boolean>(false);

  const error = errors[register.name]

  return (
    <div
      className={`${styles.input} ${cfp(styles, classNames)} ${customClasses} ${
        error ? styles.input__hasError : ""
      }`}
    >
      <input
        type={type !== "password" ? type : pass ? "text" : "password"}
        placeholder={placeholder}
        className={`${styles.input_field}  ${
          error ? styles.input_field__hasError : ""
        }`}
        style={{ height: `${height}` }}
        {...register}
        onInput={() => console.log(error)}
      />
      {type === "password" && (
        <span
          className={`material-icons-outlined ${styles.input_toggleIcon}`}
          onClick={() => showPass(!pass)}
        >
          {pass ? "visibility" : "visibility_off"}{" "}
        </span>
      )}
      {error && (
        <small className={styles.input_error}>
          {error.message}
        </small>
      )}
    </div>
  );
};

export default Input;
