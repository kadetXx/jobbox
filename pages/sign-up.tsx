import React from "react";

import { AuthLayout as Layout } from "@/layouts";

import { SignUpForm } from "@/components/authPages";

import { connect } from "react-redux";

import { createUserWithEmailAndPassword, sendVerification } from "@/firebase";

import { fetcher } from '@/helpers'

import { CREATE_ACCOUNT } from '@/store/user/user.queries'

const signUp = ({ user }) => {
  const createUser = (formData: any) => {
    const userData = {
      ...user,
      ...formData,
    };

    createUserWithEmailAndPassword(userData.email, userData.password)
      .then(async (user) => {
        const newUser = {
          ...userData,
          uid: user.user.uid,
          isEmailVerified: user.user.emailVerified
        }
        
        console.log(newUser);
        
        const { data } = await fetcher(CREATE_ACCOUNT, newUser);
        console.log(data);
        
        sendVerification()
          .then(() => console.log("email sent"))
          .catch((err) => console.log(err.message));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Layout>
      <SignUpForm onSubmit={createUser} />
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(signUp);
