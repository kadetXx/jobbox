import React from "react";

import { AuthLayout as Layout } from "@/layouts";

import { SignUpForm } from "@/components/authPages";

import { connect } from "react-redux";

const signUp = ({ user }) => {
  const createUser = (formData: any) => {
    const userData = {
      ...user,
      ...formData,
    };

    console.log(userData);
  };

  return (
    <Layout>
      <SignUpForm onSubmit={createUser} />
    </Layout>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user
})

export default connect(mapStateToProps)(signUp);
