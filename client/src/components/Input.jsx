import React from 'react'

const Input = ({type, placeholder, value, onchange}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onchange} className='w-full px-3 py-2 mb-2 rounded-md shadow-lg bg-[#737373] focus:outline-none' />
  )
}

export default Input
