import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import { format } from 'date-fns'
import Search from '../components/Search';

const List = () => {
  const location = useLocation();
  const [delivery, setdelivery] = useState(location.state.delivery)
  const [days, setdays] = useState(location.state.days)
  const [date, setdate] = useState(location.state.date);
  const [opendate, setopendate] = useState(false);
  return (
    <div><Navbar /> <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Delivery</label>
              <input placeholder={delivery} type="text" className="" />
            </div>
            <div className="lsItem">
              <label>Departure-date</label>
              <span onClick={() => setopendate(!opendate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {opendate && <DateRange
                editableDateInputs={true}
                onChange={item => setdate([item.selection])}
                minDate={new Date()}
                ranges={date}

              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Time <small>in hours</small>
                </span>
                <input type="number" min={1} placeholder={days.time} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Delivery time <small>in days</small>
                </span>
                <input type="number" min={1} placeholder={days.day} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max delay <small>in days</small>
                </span>
                <input type="number" min={0} placeholder={days.delay} className="lsOptionInput" />
              </div>

            </div>
                 <button>Search</button>
          </div>
          <div className="listResult">
            <Search/>
            <Search/>
            <Search/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List