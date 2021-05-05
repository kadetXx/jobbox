import React, { useEffect } from "react";
import Router from "next/router";

import { AuthLayout as Layout } from "@/layouts";

import { SignInForm } from "@/components/authPages";

import { signInWithGoogle, signInWithEmailAndPassword } from "@/firebase";

import { fetcher } from "helpers";

import { connect } from "react-redux";
import { UPDATE_USER } from "@/store/user/user.queries";
import { setUser } from "@/store/user/user.actions";

const signIn = ({ user, setUser }) => {

  const withEmail = (data: any) => {
    setUser({
      ...user,
      loading: true,
    });

    const { email, password } = data;

    signInWithEmailAndPassword(email, password)
      .then(async (data) => {
        setUser({
          ...user,
          email: email,
          loading: false,
        });

        const {uid, emailVerified} = data.user;

        if (emailVerified) {
          const { updateUser } = await fetcher(UPDATE_USER, {
            uid: uid,
            isEmailVerified: emailVerified,
          });

          setUser({
            ...user,
            ...updateUser
          })

          Router.push("/dashboard")
        } else {
          Router.push("/verify-email");
        }
      })
      .catch((err) => {
        setUser({ ...user, loading: false });
        alert(err.message);
      });
  };

  const withGoogle = () => {
    setUser({
      ...user,
      loading: true,
    });

    signInWithGoogle()
      .then(async (data) => {
        setUser({
          ...user,
          loading: false,
        });

        const {uid, emailVerified} = data.user;

        if (emailVerified) {
          const { data } = await fetcher(UPDATE_USER, {
            uid: uid,
            isEmailVerified: emailVerified,
          });
          console.log(data);
        } else {
          Router.push("/verify-email");
        }
      })
      .catch((err) => {
        setUser({ ...user, loading: false });
        alert(err.message);
      });
  };

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
  setUser: (user: boolean) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(signIn);
