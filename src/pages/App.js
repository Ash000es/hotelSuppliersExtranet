/* eslint-disable multiline-ternary */
/* eslint-disable space-before-function-paren */
/* eslint-disable jsx-quotes */
import React, { useContext, useState, useEffect, lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  MemoryRouter,
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Axios from 'axios'
import './App.css'
import { AuthContext, AuthProvider } from '../providers/AuthProvider'

import { CreateHotelPage } from './CreateHotel'
import { PropertOverView } from './PropertyOverview'
// import { ReservationsPage } from './Reservations'
import { RatesAndAvailab } from './RatesAndAvailab'
import { PromotionsPage } from './Promotions'
import { GuestReviews } from './GuestReviews'
import { HomePage } from './Home'
import { AccountView } from './Account'
import { LogIn } from './LogIn'
import { SignUp } from './SignUp'
import { DashBoard } from './dashBoard'
import { AppShell } from '../components/AppShell'
import { NavBar } from '../components/Navbar'
const ReservationsPage = lazy(() => import('./Reservations'))

const AuthenticatedRoutes = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={() =>
        authContext.isAuthenticated() ? <AppShell>{children}</AppShell> : <Redirect to='/' />
      }
    />
  )
}
const AdminRoutes = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={() =>
        authContext.isAuthenticated() && authContext.isAdmin() ? [children] : <Redirect to='/' />
      }
    />
  )
}
const AppRoutes = () => {
  const authContext = useContext(AuthContext)
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Switch>
        <AuthenticatedRoutes path='/account' exact>
          <AccountView />
        </AuthenticatedRoutes>
        <AuthenticatedRoutes path='/createHotel' exact>
          <CreateHotelPage />
        </AuthenticatedRoutes>
        <AuthenticatedRoutes path='/propertOverview' exact>
          <PropertOverView />
        </AuthenticatedRoutes>
        <AuthenticatedRoutes path='/bookings' exact>
          <ReservationsPage />
        </AuthenticatedRoutes>
        <AdminRoutes exact path='/ratesAndAvailab'>
          <RatesAndAvailab />
        </AdminRoutes>
        <AuthenticatedRoutes path='/promotions' exact>
          <PromotionsPage />
        </AuthenticatedRoutes>
        <AuthenticatedRoutes path='/reviews' exact>
          <GuestReviews />
        </AuthenticatedRoutes>
        <AuthenticatedRoutes path='/SignUP' exact component={SignUp} />
        <AuthenticatedRoutes path='/LogIn' exact component={LogIn} />
        <AuthenticatedRoutes path='/dashBoard' exact>
          <DashBoard />
        </AuthenticatedRoutes>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className='bg-gray-100'>
          <AppRoutes />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
