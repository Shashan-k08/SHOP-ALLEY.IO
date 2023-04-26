import React from 'react'

const Search = () => {
  return (
    <div className="searchItem">
    <img
      src="https://c8.alamy.com/comp/CF4H1C/the-exterior-of-a-local-convenience-shop-british-food-wine-store-in-CF4H1C.jpg"
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">British Food and Wine shop</h1>
      <span className="siDistance">500m from center</span>
      <span className="siTaxiOp">Free delivery</span>
      <span className="siSubtitle">
        Goods at lowest price
      </span>
      <span className="siFeatures">
       Groceries - Food - Fruits
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">$2 to $100</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton">See availability</button>
      </div>
    </div>
  </div>
  )
}

export default Search