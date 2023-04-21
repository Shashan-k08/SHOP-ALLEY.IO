import React from 'react'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPumpMedical } from '@fortawesome/free-solid-svg-icons'
import { faCookie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Header = () => {
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
      </div>


    </div>
  )
}
