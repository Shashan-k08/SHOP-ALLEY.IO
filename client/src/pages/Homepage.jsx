import React from 'react'
import { Display } from '../components/Display'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'

export const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Display/>
          <h1 className="homeTitle">Browse By Shop type</h1>
        </div>
    </div>

  )
}
