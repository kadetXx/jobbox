import React from "react";

import { AuthLayout as Layout } from "@/layouts";

import { SignUpForm } from "@/components/authPages";

import { connect } from "react-redux";

import { createUserWithEmailAndPassword, sendVerification } from "@/firebase";

import { fetcher } from '@/helpers'

import { CREATE_ACCOUNT } from '@/store/user/user.queries'
import { setUser } from '@/store/user/user.actions'

import Router from 'next/router'

const signUp = ({ user, setUser }) => {
  const createUser = (formData: any) => {
    

    const userData = {
      ...user,
      ...formData,
    };

    setUser({
      ...user,
      loading: true,
      email: formData.email
    })

    createUserWithEmailAndPassword(userData.email, userData.password)
      .then(async (user) => {
        const newUser = {
          ...userData,
          uid: user.user.uid,
          isEmailVerified: user.user.emailVerified
        }
        
        const data = await fetcher(CREATE_ACCOUNT, newUser).then(setUser({...user, loading: false}));
        console.log(data);
        
        sendVerification()
          .then(() => Router.push('/verify-email'))
          .catch((err) => console.log(err.message));
      })
      .catch((err) => {
        setUser({...user, loading: false})
        alert(err.message)
      });
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

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: any) => dispatch(setUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(signUp);
