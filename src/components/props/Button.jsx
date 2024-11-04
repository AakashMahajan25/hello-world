import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Button = ({ children }) => {
  return (
    <div className="group flex gap-1 items-center w-fit relative hover:cursor-pointer">
      <div className="bg-[#FFBB4E] p-3 rounded-full absolute -z-10">
        <MdArrowOutward />
      </div>
      <button className="bg-[#FFBB4E] rounded-full px-4 py-2 transform transition-transform duration-300 group-hover:translate-x-11">
        {children}
      </button>
      <div className="bg-[#FFBB4E] p-3 rounded-full">
        <MdArrowOutward />
      </div>
    </div>
  );
};

export default Button;
