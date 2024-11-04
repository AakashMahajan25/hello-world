import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const WButton = ({ children }) => {
    return (
        <a href="https://wa.me/728377971?text=hellomoto">
            <button className='border border-[#CDCDCD] rounded-full flex items-center text-sm lg:text-base py-2 px-4 gap-2'>
            <FaWhatsapp className='text-green-500 text-xl' />  {children}
            </button>
            
        </a>
    )
}

export default WButton
