import React from 'react'
import './pricing.css'
import Back from '../commen/back/Back'
import PriceCard from './PriceCard'
import Faq from './Faq'

const Pricing = () => {
  return (
    <>
    <Back  title='Choose The Right Plan' subtitle='Pricing' />
    
    <section className='price padding'>
        <div className="container grid">
            <PriceCard/>
        </div>
    </section>
    <Faq />
      
    </>
  )
}

export default Pricing
