import React from 'react'
import Button from './Button'

const CourseCard = ({title, thumbnail, description, instructor, duration}) => {
  return (
    <div className='w-[400px] bg-[#4d4d4d] p-5 rounded-md shadow'>
      <img src={thumbnail} alt='course-img' className='w-full block mx-auto object-cover' />
      <h3 className='font-medium py-1'>{title}</h3>
      <p className='py-1 text-sm'>{description}</p>
      <h4 className='py-1'>{instructor}</h4>
      <h5 className='pb-2'>{duration}</h5>
      <Button btnText="Enroll Now" variant="blue"/>
    </div>
  )
}

export default CourseCard
