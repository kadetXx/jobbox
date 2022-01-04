import React from "react";
import styles from "./AuthForms.module.scss";

import Link from "next/link";

import { connect } from "react-redux";

const VerifyEmailForm = ({ user }) => {
  return (
    <div className={styles.form}>
      <div className={styles.form_header}>
        <h3 className={styles.form_title}> You've got mail 📪 </h3>

        <p className={styles.form_subtitle}>
          We sent a verification link to {user.email}, please check your inbox
          and verify your account.
        </p>
      </div>

      {/* <form className={styles.form_fields} onSubmit={(e) => e.preventDefault}>
        <div className={styles.form_submit}>
          <Link href="/sign-in">
            <a>
              <button className={`btn btn__primary btn__100 ${styles.btn}`}>
                Proceed to sign in
              </button>
            </a>
          </Link>
        </div>
      </form> */}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(VerifyEmailForm);
