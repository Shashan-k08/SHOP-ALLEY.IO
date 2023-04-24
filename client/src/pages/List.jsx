import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { useState } from 'react'

const List = () => {
  const location = useLocation();
  const [delivery, setdelivery] = useState(location.state.delivery)
  const [days, setdays] = useState(location.state.days)
  const [date, setdate] = useState(location.state.date)
  return (
    <div><Navbar /> <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Delivery</label>
              <input type="text" className=""/>
            </div>
            <div className="lsItem">
              <label>Delivery</label>
              <input type="text" className=""/>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List