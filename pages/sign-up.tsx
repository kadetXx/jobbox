import React from 'react'

import { AuthLayout as Layout } from '@/layouts'

import { SignUpForm } from '@/components/authPages'

const signUp = () => {
  
  const createUser = (user, accountType) => {
    console.log(user);
  }

  return (
    <Layout>
      <SignUpForm onSubmit={createUser} />
    </Layout>
  )
}

export default signUp
