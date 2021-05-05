import React, { useEffect } from "react";
import Router from "next/router";

import { AuthLayout as Layout } from "@/layouts";

import { SignInForm } from "@/components/authPages";

import { signInWithGoogle, signInWithEmailAndPassword } from "@/firebase";

import { fetcher } from "helpers";

import { connect } from "react-redux";
import { UPDATE_USER } from "@/store/user/user.queries";
import { setLoading } from "@/store/user/user.actions";

const signIn = ({ user, setLoading }) => {
  const withEmail = (data: any) => {
    setLoading(true);

    const { email, password } = data;

    signInWithEmailAndPassword(email, password)
      .then(async (user) => {
        setLoading(false);

        const emailVerified = user.user.emailVerified;

        if (emailVerified) {
          const { data } = await fetcher(UPDATE_USER, {
            isEmailVerified: emailVerified,
          });

          console.log(data);
        } else {
          Router.push("/verify-email");
        }
      })
      .catch((err) => console.log(err.message));
  };

  const withGoogle = () => {
    setLoading(true);

    signInWithGoogle()
      .then(async (user) => {
        setLoading(false);

        const emailVerified = user.user.emailVerified;

        if (emailVerified) {
          const { data } = await fetcher(UPDATE_USER, {
            isEmailVerified: emailVerified,
          });
          console.log(data);
        } else {
          Router.push("/verify-email");
        }
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    user.uid !== null && Router.push("/dashboard");
  }, []);

  if (user.uid !== null) {
    return null;
  }

  return (
    <Layout>
      <SignInForm onSubmit={withEmail} withGoogle={withGoogle} />
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  setLoading: (status: boolean) => dispatch(setLoading(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(signIn);
