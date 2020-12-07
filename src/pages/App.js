/* eslint-disable space-before-function-paren */
/* eslint-disable jsx-quotes */
import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, MemoryRouter, HashRouter, Switch, Route } from 'react-router-dom'
import Axios from 'axios'
import './App.css'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import { CreateHotelPage } from './CreateHotel'
import { PropertOverView } from './PropertyOverview'
import { ReservationsPage } from './Reservations'
import { RatesAndAvailab } from './RatesAndAvailab'
import { PromotionsPage } from './Promotions'
import { GuestReviews } from './GuestReviews'
import { HomePage } from './Home'

function App() {
  const maybe = 'hello'
  return (
    <div className='App'>
      <HashRouter>
        <Container className='pt-3'>
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
                    <p>PropertyOverview</p>
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
              </Nav>
              <Nav>
                <Nav.Link href='#deets'>
                  <Button variant='success'>Login</Button>
                </Nav.Link>
                <Nav.Link eventKey={2} href='#memes'>
                  <Button variant='success'>Sign up</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path='/createHotel' exact component={CreateHotelPage} />
            <Route path='/propertOverview' exact component={PropertOverView} />
            <Route path='/bookings' exact component={ReservationsPage} />
            <Route path='/ratesAndAvailab' exact component={RatesAndAvailab} />
            <Route path='/promotions' exact component={PromotionsPage} />
            <Route path='/reviews' exact component={GuestReviews} />
            <Route path='/' component={HomePage} />
          </Switch>
        </Container>
      </HashRouter>
    </div>
  )
}

export default App
