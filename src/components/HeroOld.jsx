import Link from "next/link";
import React from "react";
import ellipse from "@/assets/Ellipse.png";
import Image from "next/image";
import scooty from "@/assets/car.png";
import ellipse2 from '@/assets/Ellipse2.png'
import Danda from "@/assets/Danda2.png"


const HeroOld = () => {
  return (
    <div>
      <div className="flex items-center h-[100vh]  -z-10">
       <div className="absolute left-[50%] bottom-[5%] -z-10 blur-xl opacity-50 border  rounded-full bg-orange-200 h-[100vw] w-[100vw]"> </div>

        <Image
          src={ellipse2}
          width={300}
          height={"full"}
          className="absolute left-[50%] bottom-[2%] translate-y-1/2 -z-10 opacity-30"
          alt="banner image"
        />

        <Image src={Danda} className="absolute rotate-90 w-[90vh] left-[73%] " alt="Danda"  />
      

        <div className="flex flex-col items-start h-full justify-center w-[50%] px-14">
          <div>
            {/* Heading with subtle fade-in animation */}
            <h1 className="text-5xl pb-8 text-gray-600 leading-tight animate-fadeIn">
              <span className="font-semibold bg-gradient-to-tr text-6xl from-green-400 to-blue-600 bg-clip-text text-transparent">
                Unmatched
              </span>{" "}
              Protection,{" "}
              <span className="font-semibold bg-gradient-to-tr text-6xl from-green-400 to-blue-600 bg-clip-text text-transparent">
                Unbeatable
              </span>{" "}
              Shine with <span className="text-6xl">CAMIO PPF</span>
            </h1>

            {/* Tagline with adjusted width and subtle animation */}
            <p className="text-gray-500 text-lg pb-10 w-[30rem] leading-relaxed animate-fadeIn delay-1s">
              Shield your vehicle with CAMIO’s top-tier Paint Protection Film,
              trusted by professionals worldwide
            </p>

            {/* CTA Button */}
            <Link href={"/"} className="">
              <button className="bg-gradient-to-r from-[#6EDACB] to-[#4FC0A7] border-2 text-white text-sm px-10 py-3 rounded-full font-bold border-transparent shadow-lg hover:from-[#5EC6B8] hover:to-[#3AA38A] hover:border-[#5EC6B8] transition-colors ease-in-out duration-300 focus:ring-4 focus:ring-[#5EC6B8]/50">
                PRE-ORDER
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[65%] relative flex flex-col items-center">
          <p className="absolute text-[200px] -z-10  bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-yellow-400 -top-20 left-10">CAMIO</p>
          <Image src={scooty} className="w-[80vw]" alt="scooty" />
          <div className="border-2 p-4 rounded-xl border-blue-200 backdrop-blur-md w-[28rem] -translate-x-20 text-gray-800 mt-4">
            Shield your vehicle with CAMIO’s top-tier Paint Protection Film,
            trusted by professionals worldwide
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOld;
