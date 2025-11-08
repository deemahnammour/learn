import React from 'react'
import Title from '../../commen/title/Title'
import { testimonal } from '../../../data'
import './style.css'

const Test = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className="container">
            <Title subtitle='TESTIMONIAL'  title='Our Successful Students'/>
            <div className="content grid2">
                {testimonal.map((val)=> (
                    <div className="items shadow">
                       <div className="box flex">
                            <div className="img">
                              <img src={val.cover} alt=''/>
                              <i className='fa fa-quote-left icon'></i>
                            </div>
                            <div className="name">
                              <h1>{val.name} </h1>
                              <span>{val.work} </span>
                             </div>
                         </div>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>                   
                )
                )}
            </div>
        </div>
      </section>
    </>
  )
}

export default Test
