import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red '>
        {label}
        <img src={iconURL}
         alt="arrow right"
         className='ml-2 rounded-full w-5 h-5'
         />
    </button>
  )
}

export default Button
