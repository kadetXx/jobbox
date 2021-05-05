import React, { useState, useEffect } from "react";
import styles from "./AuthForms.module.scss";

import Image from "next/image";

import { useForm } from "react-hook-form";

import { Input } from "@/shared";

import { connect } from "react-redux";
import { setUser } from "@/store/user/user.actions";

const SignUpForm = ({ onSubmit, user, setUser }: any) => {
  const accountType = user.accountType;

  const setAccountType = (value: string) => {
    setUser({
      accountType: value,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={styles.form}>
      <div className={styles.form_header}>
        <h3 className={styles.form_title}> Create an account</h3>
        <p className={styles.form_subtitle}>
          Join Jobbox and get access to unlimited job postings
        </p>
      </div>

      <div className={styles.form_optionBoxes}>
        <h3 className={styles.form_sectionTitle}>Choose account type</h3>

        <div
          className={`${styles.form_optionBox} ${
            accountType === "Job Seeker" && styles.form_optionBox__selected
          }`}
          onClick={() => setAccountType("Job Seeker")}
        >
          <span className={`material-icons ${styles.form_optionBoxIcon}`}>
            work_outline
          </span>
          <p className={styles.form_optionBoxText}>Job Seeker</p>
        </div>

        <div
          className={`${styles.form_optionBox} ${
            accountType === "Job Poster" && styles.form_optionBox__selected
          }`}
          onClick={() => setAccountType("Job Poster")}
        >
          <span
            className={`material-icons-outlined ${styles.form_optionBoxIcon}`}
          >
            corporate_fare
          </span>
          <p className={styles.form_optionBoxText}>Job Poster</p>
        </div>
      </div>

      <form className={styles.form_fields} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.form_sectionTitle}>Fill in your details</h3>
        <Input
          type="text"
          placeholder="First Name"
          className="input__50"
          errors={errors}
          register={register("firstName", { required: true })}
        />
        <Input
          type="text"
          placeholder="Last Name"
          className="input__50"
          errors={errors}
          register={register("lastName", { required: true })}
        />
        <Input
          type="email"
          placeholder="Email Address"
          errors={errors}
          register={register("email", { required: true })}
        />
        <Input
          type="password"
          placeholder="New Password"
          errors={errors}
          register={register("password", { required: true })}
        />
        <div className={styles.form_submit}>
          <button className="btn btn__primary btn__100">
            {user.loading ? (
              <Image src="/svg/loading-white.svg" height="25" width="25" />
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
