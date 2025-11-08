import React from 'react'
import "./back.css"



const Back = ({ title, subtitle }) => {
  
  return (
    <>
      <section className='back'>
        <h3>Home / {subtitle} </h3>
        <h1>{ title }</h1>
      </section>
      <div className="marigin">

      </div>
    </>
  )
}

export default Back
