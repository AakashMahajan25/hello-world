import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Button3 = ({children}) => {
  return (
    <button className='bg-[#161A34] text-[#FFFFFF] custom-btn3 flex items-center gap-2 lg:text-base text-xs'>
    {children}
    <div className='bg-[#FFCE50] text-black rounded-full p-2 text-xs'><FaArrowRight className='font-extralight' /></div>
  </button>
  )
}

export default Button3
