import React, { useState } from "react";
import styles from "./Form.module.scss";
import Image from "next/image";
import { Input, Alert } from "@/shared";
import { useForm } from "react-hook-form";
import { cfp } from "helpers";

import { fetcher } from "@/helpers";
import { SUBSCRIBE } from "@/store/newsletter/newsletter.queries";

import axios from "axios";
import { spawn } from "node:child_process";

interface FormProps {
  height?: string;
  btnType: string;
  btnText: string;
  inputClass?: string;
  customClass?: string;
}

const Form = ({ btnType, btnText, inputClass, customClass }: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [customErrors, setCustomErrors] = useState({});
  const [alertSuccess, setAlertSuccess] = useState(null);
  const [alertError, setAlertError] = useState(null);
  const [actionText, setActionText] = useState("Copy Referral Link");
  const [formResponse, setFormResponse] = useState({
    email: "",
    priority_number: "",
    total_users: "",
    referral_link: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async ({ email }) => {
    setLoading(true);

    const body = {
      email: email,
      api_key: "9DQLTX",
      referral_link: window.location.href,
    };

    axios
      .post("https://www.getwaitlist.com/waitlist", body)
      .then((res) => {
        console.log(res.data);
        const data = res.data;

        setFormResponse(data);
      })
      .then(() => {
        setAlertSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setAlertError(true);
        setLoading(false);
      });
  };

  const copyLink = () => {
    console.log("jekdcnm");

    navigator.clipboard.writeText(formResponse.referral_link).then(() => {
      setActionText("Copied!");
    });
  };

  return (
    <form
      id={styles.form}
      onSubmit={handleSubmit(submitForm)}
      className={`${customClass}`}
    >
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
          <span className={styles.form_btnSpinner}>
            <Image src="/svg/loading-white.svg" height="21" width="21" />
          </span>
        ) : (
          <>{btnText}</>
        )}
      </button>

      {alertError && (
        <Alert
          icon="error_outline"
          type="error"
          title="Sorry!"
          message="An error occured and we couldn't add this email to our newsletter."
          close={() => setAlertError(false)}
        />
      )}

      {alertSuccess && (
        <Alert
          icon="done"
          type="success"
          title="Thanks!"
          message={
            <span>
              You've successfully subscribed to our waitlist, we'll send news,
              updates and events to to your email address. You're number{" "}
              {formResponse.priority_number} on the list. Referring your friends
              to sign up gives you the upper hand{" "}
            </span>
          }
          close={() => setAlertSuccess(false)}
          action={{
            text: actionText,
            func: () => copyLink(),
          }}
        />
      )}
    </form>
  );
};

export default Form;
