import React from 'react'

import { AuthLayout as Layout } from '@/layouts'

import { VerifyEmailForm } from '@/components/authPages'

const verifyEmail = () => {
  return (
    <Layout>
      <VerifyEmailForm />
    </Layout>
  )
}

export default verifyEmail
