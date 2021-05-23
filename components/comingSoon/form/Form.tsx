import React from "react";
import styles from "./Form.module.scss";

import { Input } from "@/shared";
import { useForm } from "react-hook-form";

import { cfp } from 'helpers'

interface FormProps {
  height?: string;
  btnType: string;
  btnText: string;
  btnWidth?: string;
  inputClass?: string;
}

const Form = ({ height, btnType, btnText, btnWidth, inputClass }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div id={styles.form} style={{height: `${height}rem`}}>
      <div className={styles.form_input}>
        <Input
          type="email"
          placeholder="Enter your email address"
          errors={errors}
          classNames={[inputClass]}
          customClasses={cfp(styles, ['form_inputField'])}
          register={register("email", { required: true })}
        />
      </div>
      <button className={`btn white bg-${btnType} bd-${btnType} br-5 ${styles.form_btn}`} style={{width: `${btnWidth}`}}>
        {btnText}
      </button>
    </div>
  );
};

export default Form;
