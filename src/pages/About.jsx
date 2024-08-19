import React from 'react'
import Service from '../components/service/Service'
import Price from '../components/price/Price'
import We from '../components/we/We'
import What from '../components/what/What'
import AboutHeader from '../components/aboutheader/AboutHeader'
import Do from '../components/do/Do'



const About = () => {
  return (
    <>
    <AboutHeader/>
  <Service/>
  <We/>
  <Price/>
  <What/>
  <Do/>
    </>
  )
}

export default About