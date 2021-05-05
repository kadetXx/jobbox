import React, { useEffect } from "react";
import Router from "next/router";

import { AuthLayout as Layout } from "@/layouts";

import { SignInForm } from "@/components/authPages";

import { signInWithGoogle, signInWithEmailAndPassword } from "@/firebase";

import { connect } from "react-redux";

import { fetcher } from "helpers";

import { UPDATE_USER } from "@/store/user/user.queries";

const signIn = ({ user }) => {
  const withEmail = (data: any) => {
    const { email, password } = data;

    signInWithEmailAndPassword(email, password).then(async (user) => {
      const emailVerified = user.user.emailVerified;

      if (emailVerified) {
        const { data } = await fetcher(UPDATE_USER, {
          isEmailVerified: emailVerified,
        });
        
        console.log(data);
      } else {
        Router.push("/verify-email");
      }
    });
  };

  const withGoogle = () => {
    signInWithGoogle().then(async (user) => {
      const emailVerified = user.user.emailVerified;

      if (emailVerified) {
        const { data } = await fetcher(UPDATE_USER, {
          isEmailVerified: emailVerified,
        });
        console.log(data);
      } else {
        Router.push("/verify-email");
      }
    });
  };

  useEffect(() => {
    user.uid !== null && Router.push("/dashboard")
  }, [])


  if (user.uid !== null) {
    return null
  }

  return (
    <Layout>
      <SignInForm onSubmit={withEmail} withGoogle={withGoogle} />
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user
})

export default connect(mapStateToProps)(signIn);
