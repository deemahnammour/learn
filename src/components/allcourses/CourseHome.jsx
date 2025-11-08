import React from 'react'
import Back from '../commen/back/Back'
import CourseCard from './CourseCard'
import OnlineCourse from './OnlineCourse'

const CourseHome = () => {
  return (
    <>

    <Back title='Explore Courses' subtitle='Courses' />
    <CourseCard /> 
    <OnlineCourse/> 
    </>
  )
}

export default CourseHome
