import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import { format } from 'date-fns'

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
              <input placeholder={delivery} type="text" className=""/>
            </div>
            <div className="lsItem">
              <label>Departure-date</label>
              <span onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {opendate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setdate([item.selection])}
                 minDate={new Date()}
                  ranges={date}
                  
                />}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List