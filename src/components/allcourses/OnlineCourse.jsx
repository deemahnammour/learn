import React from 'react'
import Title from '../commen/title/Title'
import { online } from '../../data'

const OnlineCourse = () => {
  return (
    <>
    <section className='online'>
      <div className="container">
        <Title subtitle='COURSES' title='Browse Our Online Courses'/>

        <div className="content grid3">
          {online.map((val)=>(
            <div className="box">
              <div className="img">
                <img src={val.cover} alt=''/>
                <img src={val.hoverCover} alt='' className='show'/>
              </div>
              <h2>{val.title}</h2>
              <span>{val.text}</span>
            </div>
          ))}
        </div>
        </div>
    </section>

      
    </>
  )
}

export default OnlineCourse
