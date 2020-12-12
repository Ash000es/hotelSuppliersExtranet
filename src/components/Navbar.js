import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

export const NavBar = () => {
  return (
    <Container style={{ width: '100%' }}>
      <Navbar collapseOnSelect expand='md' className='navBar'>
        <Navbar.Brand href='#home'>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/home'>
              <Nav.Link href='#features'>
                <p>Home</p>
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
              <Nav.Link href='#pricing'>
                <p>Account view</p>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/SignUP'>
              <Nav.Link href='#pricing'>
                <Button variant='success'>Sign up</Button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/LogIn'>
              <Nav.Link href='#pricing'>
                <Button variant='success'>Login</Button>
              </Nav.Link>
            </LinkContainer>
          </Nav>
          {/* <Nav>
            <Nav.Link href='#deets'>
              <Button variant='success'>Login</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href='#memes'></Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
