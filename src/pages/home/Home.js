import React from 'react'
import Faqs from '../../components/Faqs'
import Footer from '../../components/Footer'

import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testmonalis from '../../components/Testmonalis'
import Values from '../../components/Values'
import "./Home.css"
const Home = () => {
  return (
    <>
      <MainHeader/>
      <Programs/>
      <Values/>
      <Faqs/>
      <Testmonalis/>
      
    </>
  )
}

export default Home