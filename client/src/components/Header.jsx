import React from 'react'
import { faCalendarDay, faShop } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPumpMedical } from '@fortawesome/free-solid-svg-icons'
import { faCookie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
export const Header = () => {
  const [opendate, setopendate] = useState(false);
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [daysoption, setdaysoption] = useState(false);
  const [days, setdays] = useState(
    {
      day: 1,
      time: 0,
      delay: 1,
    }
  )
  const handleOption=(name,operation)=>{
     setdays((prev)=>{
      return{
        ...prev,
        [name]:operation ==="i"?days[name]+1:days[name]-1,
      };
     });
  }
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
            <span onClick={() => setopendate(!opendate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {opendate && <DateRange
              editableDateInputs={true}
              onChange={item => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>

          <div className="header-search-content">
            <FontAwesomeIcon icon={'calendar-day'} className="header-icon" />
            <span className="headerSearchText">{`${days.day} days ${days.time} time ${days.delay} delay`}</span>
            <div className="delivery-time">
              <div className="optionItem">
                <span className="optionText">Days</span>
                <div className="optionCounter">
                  <button className="optionCounterButton " onClick={()=>(handleOption("day","d"))}>-</button>
                  <div className="optionCounterNumber">1</div>
                  <button className="optionCounterButton" onClick={()=>(handleOption("day","i"))}>+</button>
                </div>
              </div>


              <div className="optionItem">
                <span className="optionText">Time</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>(handleOption("time","d"))}>-</button>
                  <div className="optionCounterNumber">1</div>
                  <button className="optionCounterButton" onClick={()=>(handleOption("time","i"))}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Delay</span>
                <div className="optionCounter">
                  <button className="optionCounterButton" onClick={()=>(handleOption("delay","d"))}>-</button>
                  <div className="optionCounterNumber">1</div>
                  <button className="optionCounterButton" onClick={()=>(handleOption("delay","i"))}>+</button>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div >

  )
}
