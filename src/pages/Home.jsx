import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Working from '../components/working/Working'
import Experience from '../components/experience/Experience'
import Service from '../components/service/Service'
import Hundrerd from '../components/hundred/Hundrerd'
import Price from '../components/price/Price'
import Project from '../components/project/Project'
import Footer from '../components/footer/Footer'
import Modern from '../components/modern/Modern'


const Home = () => {
  return (
    <>
   
    <Banner/>
    <Working/>
    <Experience/>
    <Service/>
    <Hundrerd/>
    <Modern/>
    <Project/>
   
    </>
  )
}

export default Home