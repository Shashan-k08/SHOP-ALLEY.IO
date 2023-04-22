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
        </div>
    </div>

  )
}
