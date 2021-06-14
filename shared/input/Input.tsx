import React, { useEffect, useState } from "react";

import styles from "./Input.module.scss";

import { cfp } from "@/helpers";
interface InputProps {
  type: string;
  height?: string | number;
  placeholder: string;
  errors: any;
  showErrorMessage?: boolean;
  classNames?: string[];
  customClasses?: string;
  register: any;
  onInput?: () => void;
}

const Input = ({
  type,
  placeholder,
  errors,
  showErrorMessage,
  classNames,
  customClasses,
  register,
  onInput,
}: InputProps) => {
  const [pass, showPass] = useState<boolean>(false);

  const error = errors[register.name];

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
        onInput={onInput}
        {...register}
      />
      {type === "password" && (
        <span
          className={`material-icons-outlined ${styles.input_toggleIcon}`}
          onClick={() => showPass(!pass)}
        >
          {pass ? "visibility" : "visibility_off"}{" "}
        </span>
      )}
      {showErrorMessage && error && (
        <small className={styles.input_error}>{error.message}</small>
      )}
    </div>
  );
};

export default Input;
