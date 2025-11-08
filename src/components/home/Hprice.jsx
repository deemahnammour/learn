import React from 'react'
import Title from '../commen/title/Title'
import './../pricing/pricing.css'

import PriceCard from './../pricing/PriceCard'

const Hprice = () => {
  return (
    <>
    <section className='price padding'>
        <div className="container">
            <Title subtitle='OUR PRICING' title='Pricing & Packages'/>
            <div className="grid">
                <PriceCard/>
           
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Hprice
