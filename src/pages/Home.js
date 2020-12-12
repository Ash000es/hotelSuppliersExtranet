import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { NavBar } from '../components/Navbar'
export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div style={{ width: '100%' }}>
        <h1>I am home page</h1>
        <Button style={{ marginBottom: '1rem' }} variant='success'>
          Getting Started
        </Button>
      </div>
    </>
  )
}
