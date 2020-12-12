import React from 'react'
import { Footer } from './Footer'
import { NavBar } from './Navbar'
import { SideBar } from './Sidebar'

export const AppShell = () => {
  return (
    <div>
      <SideBar />

      <Footer />
    </div>
  )
}
