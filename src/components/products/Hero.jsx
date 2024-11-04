import React from 'react';
import { Box, Flex, Heading, Text, Button,  Stack } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import heroimg from '../../assets/camio.png'
import Button2 from '../props/Button2';
import Link from 'next/link';



const Hero = () => {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      align="center"
      justify="center"
      p={{ base: 4, md: 8 }}
      bg="white"
      rounded="xl"
     width={'full'}
     px={{lg:36}}
 
      maxW={{'2xl':"1500px"}} // Max width for large displays
      mx={{'2xl':'auto'}}
     
    >
      <Stack
        spacing={6}
        maxW={{ base: '100%', md: '50%' }}
        align={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
        p={{base:4}}
        
      >
        <Heading
              fontFamily=""
          as="h1"
          fontSize={{ base: '3xl', md: '3xl', lg:'44px', '2xl':'5xl' }}
          fontWeight="bold"
        >
          Explore CAMIO PPF:
          <br />
          Choose the Perfect Protection for Your Vehicle
        </Heading>
        <Text
         border={'1px solid'}
         borderColor={'#BFBFBF'}
          fontSize="md"
          px={{base:4, md:2, lg:4}}
          py={{base:2, md:1, lg:2}}
          rounded="lg"
          display="inline-block"
        >
          “Unparalleled Protection with CAMIO TPU and TPH Series”
        </Text>
        <Text fontSize={{ base: 'md', md: 'md', lg:'lg' }} color="gray.600">
       <strong style={{ color: 'black' }}>At CAMIO</strong>, we offer two premium Paint Protection Film (PPF) series—TPU and TPH—designed to meet different needs and budgets. Both series deliver top-tier protection and aesthetic enhancement, while preserving your vehicle’s paint. Whether you want the flexibility of TPU or the affordability of TPH, CAMIO has you covered.
    </Text>
        <Link  href={'/about'}>
        <Button2>
          Who We Are
        </Button2></Link>
      </Stack>

      <Box
        boxSize={{ base: '100%', md: '50%' }}
        mt={{ base: 8, md: 0 }}
        p={4}
        rounded="2xl"
        overflow="hidden"
        className='flex justify-center'
        
      >
        <Image
          src={heroimg} // Replace with actual image path
          alt="CAMIO PPF Showcase"
          objectFit="cover"
          rounded="2xl"
          boxShadow="md"
          width={500}
          height={500}
          priority
        />
      </Box>
    </Flex>
  );
};

export default Hero;
