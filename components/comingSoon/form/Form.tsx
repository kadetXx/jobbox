import React, { useState } from "react";
import styles from "./Form.module.scss";
import Image from "next/image";
import { Input, Alert } from "@/shared";
import { useForm } from "react-hook-form";
import { cfp } from "helpers";

import { fetcher } from "@/helpers";
import { SUBSCRIBE } from "@/store/newsletter/newsletter.queries";

import axios from "axios";

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
  const [formResponse, setFormResponse] = useState<any>({
    email: "",

    current_priority: "",
    total_users: "",
    referral_link: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const hideScroll = (hide: boolean) => {
    hide ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }

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
        const data = res.data;

        setFormResponse(data);
        reset();
        hideScroll(true)
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
            <span className={styles.form_alertText} >
              You've successfully subscribed to our waitlist, we'll send news,
              updates and events to to your email address. Kindly refer friends to join jobbox. <br /> <br />
              <code>{ formResponse.referral_link }</code>
            </span>
          }
          close={() => [
            setAlertSuccess(false),
            setActionText("Copy Referral Link"),
            hideScroll(false)
          ]}
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
