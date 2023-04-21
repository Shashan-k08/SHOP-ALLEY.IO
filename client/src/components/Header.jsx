import React from 'react'
import { faCalendarDay, faShop } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPumpMedical } from '@fortawesome/free-solid-svg-icons'
import { faCookie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
export const Header = () => {
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-items">
          <div className="header-list-items">
            <FontAwesomeIcon icon={faShop} />
            <span>  Shops</span>
          </div>

          <div className="header-list-items">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Cart</span>
          </div>

          <div className="header-list-items">
            <FontAwesomeIcon icon={faTruckArrowRight} />
            <span>Shipment</span>
          </div>

          <div className="header-list-items">
            <FontAwesomeIcon icon={faPumpMedical} />
            <span>Health-care</span>

          </div>

          <div className="header-list-items">
            <FontAwesomeIcon icon={faCookie} />
            <span>Cookie</span>
          </div>
        </div>
        <h1 className="header-text"> Get anything fron anywhere with Shop-Alley</h1>
        <p className='header-des'>
          Redeem coupnes and do unlimited shopinf for your household
          grocerries and many more
        </p>
        <button className="headerBtn">
          Sign /SignUp
        </button>
        <div className="header-search">
          <div className="header-search-content">
            <FontAwesomeIcon icon={faShop} className="header-icon" />
            <input type="text" placeholder="What you want to buy ?"
              className="header-search-field" />
          </div>

          <div className="header-search-content">
            <FontAwesomeIcon icon={faCalendarDay} className="header-icon" />
            <span className="headerSearchText">Delivery time</span>
            <DateRange
              editableDateInputs={true}
              onChange={item => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          </div>

          <div className="header-search-content">
            <FontAwesomeIcon icon={'calendar-day'} className="header-icon" />
            <span className="headerSearchText">2days 3days 4days</span>
          </div>

        </div>
      </div>


    </div>
  )
}
