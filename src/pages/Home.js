import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { SignUp } from '../components/SignUp'
import { NavBar } from '../components/Navbar'
export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1>I am home page</h1>
      <Button style={{ marginBottom: '1rem' }} variant='success'>
        Getting Started
      </Button>
      <SignUp />
    </div>
  )
}
