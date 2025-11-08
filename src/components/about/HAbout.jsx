import React from 'react'
import Title from '../commen/title/Title'
import { courseCard } from '../../data'
import OnlineCourse from '../allcourses/OnlineCourse'

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className="container">
            <Title subtitle='OUR COURSES' title='Explore Our Popular Online Courses'/>
            <div className='coursesCard'>
        <div className=" grid2">
           {courseCard.slice(0,3).map((val)=>{
            return (
            <div className="items">
                <div className="content flex">
                    <div className="left">
                        <div className="img">
                            <img src={val.cover} alt='' />
                        </div>
                    </div>
                    <div className="text">
                        <h2>{val.coursesName}</h2>
                        <div className="rate">
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <label htmlFor=''>(5.0)</label>
                        </div>
                        <div className="details">

                            {val.courseTeacher.map((details)=>(
                                <>
                                <div className="box">
                                    <div className="dimg">
                                        <img src={details.dcover} alt=''/>
                                    </div>
                                    <div className="para">
                                        <h4>{details.name}</h4>
                                    </div>
                                </div>
                                <span>{details.totalTime}</span>
                                </>

                            ))}
                        </div>
                    </div>
                </div>
                <div className="price">
                    <h3>{val.priceAll} / {val.pricePre}</h3>
                </div>
                <button className='btn'>enroll now !</button>
                
            </div>
           )

           })}
        </div>
      </div>
        </div>
      </section>
      <OnlineCourse/>
    </>
  )
}

export default HAbout
