import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import { NameAvatar } from './Avatar'
import { AuthContext } from '../providers/AuthProvider'

export const NavBar = () => {
  const authContext = useContext(AuthContext)
  const { role } = authContext.authState.userInfo
  // here I need to create an array of navlink items and map it below with arr.include function
  return (
    <Container style={{ width: '100%' }}>
      <Navbar collapseOnSelect expand='md' className='navBar'>
        <Navbar.Brand href='/'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/dashboard'>
              <Nav.Link href='#features'>
                <p>dashboard</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/createHotel'>
              <Nav.Link href='#pricing'>
                <p>List your hotel</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/propertOverview'>
              <Nav.Link href='#pricing'>
                <p>Property overview</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/bookings'>
              <Nav.Link href='#pricing'>
                <p>Reservations</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/ratesAndAvailab'>
              <Nav.Link href='#pricing'>
                <p>Rates and availabilites</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/promotions'>
              <Nav.Link href='#pricing'>
                <p>Promotions</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/reviews'>
              <Nav.Link href='#pricing'>
                <p>Guest reviews</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/account'>
              <Nav.Link href='#pricing'>Account view</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link href='#deets'>
              <div style={{ width: 75 }}>
                <NameAvatar />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
