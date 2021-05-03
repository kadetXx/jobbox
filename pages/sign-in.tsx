import React from 'react'

import { AuthLayout as Layout } from '@/layouts'

import { SignInForm } from '@/components/authPages'

const signIn = () => {
  const signIn = () => {

  }
  
  return (
    <Layout>
      <SignInForm onSubmit={signIn} />
    </Layout>
  )
}

export default signIn
