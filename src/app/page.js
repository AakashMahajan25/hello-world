import Faq from '@/components/home/Faq'
import Hero from '@/components/home/Hero'
import Reviews2 from '@/components/home/Reviews2'
import React from 'react'
import Car from '@/components/home/Car'
import WhyUs from '@/components/home/WhyUs'
import TopPicks from '@/components/home/TopPicks'
import Protection from '@/components/home/Protection'
import Reviews from '@/components/home/Reviews'





const page = () => {
  return (
    <div className=''>
      <Hero/>
      <WhyUs />
      <TopPicks />
      <Car />
      <Protection />
      <Reviews2 />
      <Faq />
      
    </div>
  )
}

export default page
