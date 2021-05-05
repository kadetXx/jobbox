import React from "react";

import styles from "./AuthForms.module.scss";

import Image from "next/image";

import { useForm } from "react-hook-form";

import { Input } from "@/shared";

import { connect } from "react-redux";

const SignIn = ({ onSubmit, withGoogle, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.form}>
      <div className={styles.form_header}>
        <h3 className={styles.form_title}> Hello 👋🏼 </h3>
        <p className={styles.form_subtitle}>Sign in to your Jobbox account</p>
      </div>

      <form className={styles.form_fields} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email Address"
          errors={errors}
          register={register("email", { required: true })}
        />
        <Input
          type="password"
          placeholder="Password"
          errors={errors}
          register={register("password", { required: true })}
        />
        <div className={styles.form_submit}>
          <button className={`btn btn__primary btn__100 ${styles.btn}`}>
            {user.loading ? (
              <Image src="/svg/loading-white.svg" height="25" width="25" />
            ) : (
              "Sign In"
            )}
          </button>
          <button
            className={`btn btn__white btn__100 ${styles.btn}`}
            onClick={() => withGoogle()}
          >
            <i className="btn_icon btn_icon__prefix">
              <Image src="/img/google_logo.webp" width="18" height="18" />
            </i>
            Sign In WIth Google
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(SignIn);
