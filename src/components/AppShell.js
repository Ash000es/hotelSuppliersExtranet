import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './Navbar'
import { SideBar } from './Sidebar'

export const AppShell = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  )
}
