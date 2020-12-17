import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { NavBar } from '../components/Navbar'
import { Redirect } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { AuthContext } from '../providers/AuthProvider'
import Navbar from 'react-bootstrap/Navbar'
export const HomePage = () => {
  const authContext = useContext(AuthContext)
  const isIt = authContext.isAuthenticated()

  return (
    <>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='#home'>Logo</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href={authContext.isAuthenticated() ? '/dashboard' : '/LogIn'}>Login</Nav.Link>
          <Nav.Link href='/SignUP'>Sign up</Nav.Link>
        </Nav>
      </Navbar>
      <div style={{ width: '100%', margin: '1rem' }}>
        <h1>I am home page</h1>

        <Nav variant='pills' style={{ margin: '1rem' }}>
          {/* <LinkContainer > */}
          <Nav.Item>
            <Nav.Link href={authContext.isAuthenticated() ? '/dashboard' : '/SignUp'}>
              Get Started
            </Nav.Link>
          </Nav.Item>
          {/* </LinkContainer> */}
        </Nav>
      </div>
    </>
  )
}
