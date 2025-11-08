import React, { useState } from 'react'
import Head from './Head'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [click , setclick] = useState(false)

  return (
    <>
      <Head/>
      <header>
       <nav className='flexSB'>
       
         <ul className={click ? 'moblie-nav' : 'flexSB'} onClick={()=> setclick(false)}>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/Courses'>All Courses</Link></li>
             <li><Link to='/About'>About</Link></li>
             <li><Link to='/Team'>Team</Link></li>
             <li><Link to='/Pricing'>Pricing</Link></li>
             <li><Link to='/Journal'>Journal</Link></li>
             <li><Link to='/Contact'>Contact</Link></li>
         </ul>
<div className='btn'>
         <div className="start">
             <div className="button"> GET CERTIFICATE </div>
         </div>
         
         <button className='toggle' onClick={()=> setclick(!click)}>
          { click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
         </button>
</div>
        </nav>
      
      </header>
     
    </>
  )
}

export default Header
