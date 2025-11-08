import React from 'react'
import Back from '../commen/back/Back'
import BlogCard from './BlogCard'
import './blog.css'

const Blog = () => {
  return (
    <>
     <Back title='Blog Posts' subtitle='JOURNAL' /> 
     <section className='blog padding'>
        <div className="container grid2">
            <BlogCard/>
        </div>
     </section>
    </>
  )
}

export default Blog
