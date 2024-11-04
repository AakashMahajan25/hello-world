import Hero from '@/components/about/Hero'
import Mission from '@/components/about/Mission'
import Values from '@/components/about/Values'
import Journey from '@/components/about/Journey'
import Choose from '@/components/about/Choose'
import Power from '@/components/about/Power'
import Gallery from '@/components/about/Gallery'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Mission/>
      <Values/>
      <Journey/>
      {/* <Choose/> */}
      <Power/>
      <Gallery/>
    </div>
  )
}

export default page
