import React, { useState } from "react";
import styles from "./Form.module.scss";
import Image from "next/image";
import { Input } from "@/shared";
import { useForm } from "react-hook-form";

import { cfp } from "helpers";

import { fetcher } from "@/helpers";
import { SUBSCRIBE } from "@/store/newsletter/newsletter.queries";

interface FormProps {
  height?: string;
  btnType: string;
  btnText: string;
  inputClass?: string;
  customClass?: string;
}

const Form = ({
  btnType,
  btnText,
  inputClass,
  customClass
}: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [customErrors, setCustomErrors] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async ({ email }) => {
    setLoading(true);

    try {
      const { subscribe } = await fetcher(SUBSCRIBE, {
        email: email,
      });

      console.log(subscribe);
      setLoading(false);

      if (subscribe.status === false) {
        setCustomErrors({
          email: {
            message: subscribe.message,
          },
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form id={styles.form} onSubmit={handleSubmit(submitForm)} className={`${customClass}`}>
      <div className={styles.form_input}>
        <Input
          type="email"
          placeholder="Enter your email address"
          errors={customErrors}
          classNames={[inputClass]}
          customClasses={cfp(styles, ["form_inputField"])}
          register={register("email", { required: true })}
          onInput={() => setCustomErrors({})}
        />
      </div>
      <button
        type="submit"
        className={`btn white bg-${btnType} bd-${btnType} br-5 ${styles.form_btn}`}
      >
        {loading ? (
          <span className={styles.form_btnSpinner} ><Image src="/svg/loading-white.svg" height="21" width="21" /></span>
        ) : (
          <>{btnText}</>
        )}
      </button>
    </form>
  );
};

export default Form;
