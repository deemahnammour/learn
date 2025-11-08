import React from 'react'
import { price } from '../../data'
import './pricing.css'

const PriceCard = () => {
  return (
    <>
    {price.map((val) => (
        <div className="items shadow ">
            <h4>{val.name} </h4>
            <h1>
                <span> $ </span>
                {val.price}             
            </h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='outline-btn'>Get Started</button>
        </div>
    ))}
      
    </>
  )
}

export default PriceCard
