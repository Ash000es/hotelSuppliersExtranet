import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { SignUp } from '../components/SignUp'

export const HomePage = () => {
  return (
    <>
      <h1>I am home page</h1>
      <Button variant="success">Getting Started</Button>
      <SignUp />
    </>
  )
}
