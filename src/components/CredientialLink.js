import React, { useState, useContext, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import { AuthContext } from '../providers/AuthProvider'

export const CredentialsLink = () => {
  const authContext = useContext(AuthContext)
  console.log(authContext.isAuthenticated(), 'lll')
  return (
    <Nav variant='pills' defaultActiveKey='/home'>
      <Nav.Item>
        <Nav.Link href={authContext.isAuthenticated() ? '/dashboard' : '/LogIn'}>Login</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href='/SignUP' eventKey='link-1'>
          Sign up
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
