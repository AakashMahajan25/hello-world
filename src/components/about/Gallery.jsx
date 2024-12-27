import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import camio from "@/assets/camio.png"
import carimage from "@/assets/carimage.png"
import logo from "@/assets/logo.png"
import journey from "@/assets/journey.png"
import toppicks from "@/assets/topPicks21.png"
import bikeimg from "@/assets/products/mghectar.jpg"


const Gallery = () => {
  return (
    <Flex width={'100%'} p={{ lg: 4, '2xl': 40 }} pb={{lg:'120px'}} flexDir={{base:'column', lg:'row'}} >
      <Box width={{base:'100%', lg:'66%'}}>
        <Flex width={'100%'}>
          <Box width={'full'} p={2}><Image src={camio} alt='camio' width={400} height={420} className='w-full' /></Box>
          <Box width={'full'} >
            <Box width={'full'} p={2}><Image src={carimage} alt='carimage' width={400} height={300} className='w-full' /></Box>
            <Box width={'full'} p={2}><Image src={logo} alt='logo' className='w-full' height={120} width={400} /></Box>
          </Box>
        </Flex>
        <Box width={'100%'} p={2} display={{base:"none", lg:"block"}}>
          <Image src={toppicks} alt='camio' width={800} height={60} className='w-full rounded-2xl' />
        </Box>
      </Box>
      <Flex width={{base:'100%', lg:'33%'}} flexDir={'column'} display={{base:"none", lg:"block"}}>
        <Box p={2}><Image src={journey} alt='logo' className='w-full' height={60} width={400} /></Box>
        <Box p={2}><Image src={bikeimg} alt='camio' width={400} height={520} className='w-full rounded-2xl' /></Box>
        {/* <Box><Image src={camio} alt='camio' width={400} height={300} className='w-full' /></Box> */}
      </Flex>
    </Flex>
  )
}

export default Gallery
