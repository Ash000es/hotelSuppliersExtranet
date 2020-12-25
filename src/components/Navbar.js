import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import { NameAvatar } from './Avatar'
import { AuthContext } from '../providers/AuthProvider'
import { navItems } from '../Helpers/Constants'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const NavBar = () => {
  const authContext = useContext(AuthContext)
  const { role } = authContext.authState.userInfo
  const handleSelect = (eventKey) => {
    if (eventKey === '4.1') {
      return authContext.LogOut()
    }
  }
  const fallBack = 'A'

  return (
    <Container style={{ width: '100%' }}>
      <Navbar collapseOnSelect expand='md' className='navBar'>
        <Navbar.Brand href='/'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav fill justify className='mr-auto'>
            {navItems.map((navItem, i) => {
              return (
                <>
                  {navItem.allowedRoles.includes(role) && (
                    <LinkContainer key={i} to={navItem.path}>
                      <Nav.Item key={i}>
                        <Nav.Link href='#features'>
                          <span>{navItem.label}</span>
                        </Nav.Link>
                      </Nav.Item>
                    </LinkContainer>
                  )}
                </>
              )
            })}
            <NavDropdown
              title={authContext.authState.userInfo.firstName || fallBack}
              id='nav-dropdown'
            >
              <NavDropdown.Item eventKey='4.2'>Separated link</NavDropdown.Item>
              <NavDropdown.Item onSelect={handleSelect} eventKey='4.1'>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
