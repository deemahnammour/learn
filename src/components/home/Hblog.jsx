import React from 'react'
import Title from '../commen/title/Title'
import { blog } from '../../data'
import './../blog/blog.css'

const Hblog = () => {
  return (
    <>
    <section className='blog'>
        <div className="container ">
        <Title subtitle='OUR BLOG' title='Recent From Blog'/>
        <div className="grid2">
        {blog.slice(0,3).map((val)=>{
      return (
          <div className="items .shadow">
            <div className="img">
              <img src={val.cover} alt='' />
            </div>
            <div className="text">
              <span>
                <i className='fa fa-user'></i>
                <label htmlFor=''>{val.type} </label>
              </span>
               <span>
                <i className='fa fa-calendar-alt'></i>
                <label htmlFor=''>{val.data} </label>
              </span>
               <span>
                <i className='fa fa-comments'></i>
                <label htmlFor=''>{val.comment} </label>
              </span>             
            </div>
            <h1>{val.title} </h1>
            <p>{val.desc}</p>

        </div>
      )     
    })}
        </div>



        </div>
    </section>
      

    </>
  )
}

export default Hblog
