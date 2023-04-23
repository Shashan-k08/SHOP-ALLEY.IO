import React from 'react'
import { Display } from '../components/Display'
import FeaturedShops from '../components/FeaturedShops'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import MailList from '../components/MailList'
import { Navbar } from '../components/Navbar'
import Shoptype from '../components/Shoptype'

export const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Display/>
          <h1 className="homeTitle">Browse By Shop type</h1>
          <Shoptype/>
          <h1 className="HomeTitle"> Most loved Shops</h1>
          <FeaturedShops/>
          <MailList/>
          <Footer/>
        </div>
    </div>

  )
}
