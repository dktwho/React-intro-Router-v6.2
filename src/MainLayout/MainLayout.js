
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Menu from '../Menu/Menu'

const MainLayout = () => {
  return (
    <>
    <Menu/>
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout
