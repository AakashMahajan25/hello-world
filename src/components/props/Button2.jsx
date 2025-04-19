import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button2 = ({children}) => {
  return (
    <button className='bg-[#FFCE50] text-black custom-btn2 flex items-center gap-2  lg:text-base text-xs  max-w-fit'>
      {children}
      <div className='bg-white text-black rounded-full p-2 '><FaArrowRight className='font-extralight' /></div>
    </button>
  )
}

export default Button2
