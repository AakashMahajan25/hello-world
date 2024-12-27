import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import journey from "../../assets/journey.png"; // Corrected the import path
import Button2 from '../props/Button2';
import journeyCar from "@/assets/products/newImages/blackmatte.jpg"

const Journey = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction={{ base: "column", lg: "row" }} // Responsive direction
      px={{ base: "20px", md: "150px" }} 
      py={{base:'60px' , lg:'120px'}}
      gap={{ base: "30px", md: "50px" }} // Responsive gap
    >
      <Box textAlign="left" maxW={{ base: "100%", md: "600px" }}>
        <Heading
              fontFamily=""
          as="h2"
          fontSize={{ base: "28px", md: "36px", lg: "42px" }} // Responsive font size
          fontWeight="700"
          mb={{ base: "18px", md: "24px", lg:"5xl" }}
        >
          Our Journey
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "18px" }} // Responsive font size
          fontWeight="400"
          lineHeight="1.6"
          mb="36px"
        >
          CAMIO PPF was born out of a passion for automotive care and a desire to offer top-notch protection for vehicles worldwide. From our humble beginnings, we have grown into a trusted global supplier of paint protection films, renowned for our dedication to quality and customer satisfaction. Our journey is a testament to our commitment to excellence and our relentless pursuit of innovation.
        </Text>
      </Box>

      <Box width={{ base: "100%", md: "500px" }} height="400px" overflow='hidden' borderRadius="2xl">
        <Image
          src={journeyCar}
          alt="Journey"
          width={500}
          height={500}
          layout="responsive" // Makes the image responsive
        />
      </Box>
    </Flex>
  );
}

export default Journey;
