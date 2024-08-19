import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../../pages/Home'
import Footer from '../footer/Footer'
import About from '../../pages/About'
import Header from '../header/Header'
const Layout = () => {
  return (
    <>
    
    
    <Header/>


    <Outlet />
    
   <Footer/>


    </>
  )
}

export default Layout