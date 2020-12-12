/* eslint-disable space-before-function-paren */
/* eslint-disable jsx-quotes */
import React, { useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, MemoryRouter, HashRouter, Switch, Route } from 'react-router-dom'
import Axios from 'axios'
import './App.css'

import { CreateHotelPage } from './CreateHotel'
import { PropertOverView } from './PropertyOverview'
import { ReservationsPage } from './Reservations'
import { RatesAndAvailab } from './RatesAndAvailab'
import { PromotionsPage } from './Promotions'
import { GuestReviews } from './GuestReviews'
import { HomePage } from './Home'
import { AccountView } from './Account'
import { AppShell } from '../components/AppShell'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path='/account' exact>
        <AppShell>
          <AccountView />
        </AppShell>
      </Route>
      <Route path='/createHotel' exact component={CreateHotelPage} />
      <Route path='/propertOverview' exact component={PropertOverView} />
      <Route path='/bookings' exact component={ReservationsPage} />
      <Route exact path='/ratesAndAvailab'>
        <RatesAndAvailab />
      </Route>
      <Route path='/promotions' exact component={PromotionsPage} />
      <Route path='/reviews' exact component={GuestReviews} />
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <div className='bg-gray-100'>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
