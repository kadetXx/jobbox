import React, { useState } from "react";
import styles from "./AuthForms.module.scss";

import { useForm } from "react-hook-form";

import { Input } from "@/shared";

const SignUpForm = ({ onSubmit }: any) => {
  const [accountType, setAccountType] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
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
          register={register("firstName", { required: true })}
        />
        <Input
          type="email"
          placeholder="Email Address"
          errors={errors}
          register={register("firstName", { required: true })}
        />
        <Input
          type="password"
          placeholder="New Password"
          errors={errors}
          register={register("firstName", { required: true })}
        />
        <div className={styles.form_submit} >
          <button className="btn btn__primary btn__100">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
