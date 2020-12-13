import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { NavBar } from '../components/Navbar'
import { Redirect } from 'react-router-dom'
import { CredentialsLink } from '../components/CredientialLink'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { AuthContext } from '../providers/AuthProvider'
export const HomePage = () => {
  const authContext = useContext(AuthContext)
  const isIt = authContext.isAuthenticated()
  console.log(authContext, isIt, 'here')
  return (
    <>
      <CredentialsLink />
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
