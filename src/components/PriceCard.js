import React from 'react'
import './price.css'


const PriceCard = () => {
  return (
    <div className="price-container">
      <div className="pricecard-wrapper-one">
        <h1>Basic</h1> 
        <p>Full online program access</p>
        <p>Online fit community support</p>
        <p>One online coaching session per month</p>
        <p className='price-p'>$29 p/wk</p>
        <button className="button-price">Get 25% off</button>
      </div>
      <div className="pricecard-wrapper-two">
        <h1>Platnuim</h1>
        <p>Full online program access</p>
        <p>Online fit community support</p>
        <p>One online coaching session per week</p>
        <p className='price-p'>$99 p/wk</p>
        <button className="button-price">Get 25% off</button>
    </div>
</div>
  )
}

export default PriceCard